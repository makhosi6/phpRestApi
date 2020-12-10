<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;

// include "./helpers/store.php";


class Controller
{
    public function __construct()
    {
        //get from .env
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "jobs_app";
        $this->port = 3307;
    }
    public function test()
    {
        echo "TEST";
    }
    public function find(Request $req, Response $res)
    {
        $params = $req->getParams();
        $id = $params["id"];
        //
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "jobs_app";
        $port = 3307;
        //
        $x = $_SERVER['REQUEST_URI'];
        $y = explode("/", $x);
        $table = $y[3];
     //
        $conn = new mysqli($servername, $username, $password, $dbname, $port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql_id = "SELECT * FROM $table WHERE id='{$id}'";
        $sql_o = "SELECT * FROM $table ORDER BY created_at DESC";
        //
        $sql = (isset($id)) ? $sql_id : $sql_o;
        $result = $conn->query($sql);
        $arr = [];
        if ($result->num_rows > 0) {
            // output data of each row
            while ($row = $result->fetch_assoc()) {
                array_push($arr,
                    $row
                );
            }
        } else {
            array_push($arr,
                array("Error" => "No resource with given URL found", "code" => 404, "method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI'])
            );
        }
        echo json_encode($arr);
        $conn->close(); 
    }
    public function create(Request $req, Response $res)
    {
       
        // $id = randKey();
        $id = "random_key";
        $body = $req->getBody();
        $date = date('Y-m-d H:i:s');
        //
        //  $is_admin = $body["is_admin"];
        //  $xero = "0";
        //
        $values = "updated_at='{$date}' ";
        foreach($body as $key => $val) {
            $values .= "$key='{$val}' ";
          }
        //
        $x = $_SERVER['REQUEST_URI'];
        $y = explode("/", $x);
        $table = $y[3];
        // Create connection
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
        if ($table == "jobs") {
            $title = $body["title"];
            $details = $body["details"];
            $admin_id = $body["admin_id"];
            //
            $sql = "INSERT INTO `jobs` (`id`, `title`, `details`, `admin_id`) VALUES ('{$id}', '{$title}', '{$details}', '{$admin_id}')";
        } elseif ($table == "users") {
            $firstname = $body["firstname"];
            $lastname = $body["lastname"];
            $email = $body["email"];
            //
            $sql = "INSERT INTO `users` (`id`,`firstname`,`lastname`,`email`)
            VALUES ('{$id}','{$firstname}','{$lastname}','{$email}')";
        }
    
        if ($conn->query($sql) === true) {
     
            echo json_encode(array("mssg" => "success", "code" => 200,'created_at' => $date));
        } else {
            echo json_encode(array("mssg" => $conn->error, "code" => 500,"method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI']));
        }
        $conn->close();
    }
    public function update(Request $req, Response $res)
    {
         //PATCH is the actual method.
        $body = $req->getBody();
        $date = date('Y-m-d H:i:s');
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        //
        $x = $_SERVER['REQUEST_URI'];
        $y = explode("/", $x);
        $table = $y[3];
        $id = $y[4];
        //
        $arr = json_decode($body);
        $values = "updated_at='{$date}' ";
        foreach($arr as $key => $val) {
            $values .= ", $key='{$val}'";
          }
        //TODO: SQL STATEMENTS
        $sql = "UPDATE $table SET $values WHERE id='{$id}'";
       //
        if ($conn->query($sql) === true) {
            echo json_encode(array("Mssg" => "Success", "code" => 200, 'updated_at' => $date));
        } else {
            echo json_encode(array("Error" => $conn->error, "code" => 400,"method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI']));
        }
        $conn->close();
    }
    public function dump(Request $req, Response $res)
    {
        $date = date('Y-m-d H:i:s');
        $x = $_SERVER['REQUEST_URI'];
        $y = explode("/", $x);
        $table = $y[3];
        $id = $y[4];
        //
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        //TODO: SQL STATEMENTS
        $sql = "DELETE FROM $table WHERE id='{$id}'";
    
        if ($conn->query($sql) === true) {
            echo json_encode(array("Mssg" => "Success, deleted a record from  $table", "code" => 200, 'deleted_at' => $date));
        } else {
            echo json_encode(array("Mssg" => $conn->error, "code" => 500,"method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI']));
        }
    
        $conn->close();
    }
}
