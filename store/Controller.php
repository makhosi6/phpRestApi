<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;

include "./store/store.php";

class Controller
{
    public function __construct($table)
    {
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "jobs_app";
        $this->port = 3307;
    }
    public function test(Request $req, Response $res)
    {

    }
    public function find(Request $req, Response $res)
    {
        $params = $req->getParams();
        $id = $params["id"];
        //
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql_id = "SELECT * FROM users WHERE id='{$id}'";
        $sql_o = "SELECT * FROM users ORDER BY created_at DESC";
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
                array("Error" => "No resource with given URL found", "code" => 404, "method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI'], "_" => $sql)
            );
        }
        echo json_encode($arr);
        $conn->close();
    }
    public function create(Request $req, Response $res)
    {
        $id = randKey();
        $body = $req->getBody();
        $firstname = $body["firstname"];
        $lastname = $body["lastname"];
        $email = $body["email"];
        //   $id = basename($_SERVER['REQUEST_URI']);
        //  $is_admin = $body["is_admin"];
        //  $xero = "0";
        //
        $date = date("Y-m-d H:i:s");
        // Create connection
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        //TODO: SQL STATEMENTS
        //SPLIT CODE USING IF STATEMENTS
        $sql = "INSERT INTO users (id,firstname,lastname,email)
         VALUES ('{$id}', '{$firstname}', '{$lastname}', '{$email}')";

        if ($conn->query($sql) === true) {
            echo json_encode(array("mssg" => "Success", "code" => 200, 'created_at' => $date));
        } else {
            echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
        }
        $conn->close();
    }
    public function update(Request $req, Response $res)
    {
        $body = $req->getBody();
        $date = date('Y-m-d H:i:s');
        $id = basename($_SERVER['REQUEST_URI']);
        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        //TODO: SQL STATEMENTS
        $sql = "UPDATE users SET firstname='MAKHOSANDILE', updated_at='{$date}' WHERE id='{$id}'";
    
        if ($conn->query($sql) === true) {
            echo json_encode(array("Mssg" => "Success", "code" => 200, "_"=> $sql,'updated_at' => $date, "date"=>$date));
        } else {
            echo json_encode(array("Error" => $conn->error, "code" => 400, "_"=> $sql,"target_id"=> $id));
        }
        $conn->close();

    }
    public function dump(Request $req, Response $res)
    {
        $id = basename($_SERVER['REQUEST_URI']);
        $date = date('Y-m-d H:i:s');
        //
      $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname, $this->port);
      // Check connection
      if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
      }
      //TODO: SQL STATEMENTS
      $sql = "DELETE FROM users WHERE id='{$id}'";
  
      if ($conn->query($sql) === true) {
          echo json_encode(array("Mssg" => "Success", "code" => 200, 'deleted_at' => $date));
      } else {
          echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
      }
  
      $conn->close();
    }
}
