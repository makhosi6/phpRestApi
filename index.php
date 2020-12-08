<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;
use ElementaryFramework\WaterPipe\WaterPipe;

require "./store/store.php";
//
$basePipe = new WaterPipe;
//

$basePipe->get("/", function (Request $req, Response $res) {
    //
    $GLOBALS['servername']  = "localhost";	
    $GLOBALS['username'] = "root";	
    $GLOBALS['password'] = "";	
    $GLOBALS['dbname'] = "jobs_app";
    $id = basename($_SERVER['REQUEST_URI']);
    echo json_encode(array("method"=> $_SERVER['REQUEST_METHOD'], "id"=>$id,"url" =>  $_SERVER['REQUEST_URI']));
    // echo date('Y-m-d H:i:s') . "    ".date_default_timezone_get();
    
});

$basePipe->get("/users", function (Request $req, Response $res) {
    $params = $req->getParams();
        $id = $params["id"];
        //
        $servername = "localhost";	
        $username = "root";	
        $password = "";	
        $dbname = "jobs_app";
        $port=3307;
        // $servername = getenv('SERVE');
        // $username = getenv('USERNAME');
        // $password = getenv('PASSWORD');
        // $dbname = getenv('DB');
        $conn = new mysqli($servername, $username, $password, $dbname, $port);
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
                array("Error" => "No resource with given URL found", "code" => 404, "method"=> $_SERVER['REQUEST_METHOD'], "url" =>  $_SERVER['REQUEST_URI'], "_" => $sql)
            );
        }
       echo json_encode($arr);
        $conn->close();
});

$basePipe->post("/users", function (Request $req, Response $res) {
    //
    $servername = "localhost";	
    $username = "root";	
    $password = "";	
    $dbname = "jobs_app";
    $port=3307;
    //
    $date = date('Y-m-d H:i:s');
    $id = randKey();
    $body = $req->getBody();
    $firstname = $body["firstname"];
      $lastname = $body["lastname"];
      $email = $body["email"];
    //   $id = basename($_SERVER['REQUEST_URI']);
    //  $is_admin = $body["is_admin"];
    //  $xero = "0";
     
     $date = date("Y-m-d H:i:s");
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname, $port);

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
});
$basePipe->put("/users/:id", function (Request $req, Response $res) {
    $body = $req->getBody();
    $servername = "localhost";	
    $username = "root";	
    $password = "";	
    $dbname = "jobs_app";
    $port=3307;
    //
    $date = date('Y-m-d H:i:s');
    $id = basename($_SERVER['REQUEST_URI']);
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
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
});
$basePipe->delete("/users/:id", function (Request $req, Response $res) {
    $body = $req->getBody();
      //
      $servername = "localhost";	
      $username = "root";	
      $password = "";	
      $dbname = "jobs_app";
      $port=3307;
      //
      $id = basename($_SERVER['REQUEST_URI']);
      $date = date('Y-m-d H:i:s');
      //
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
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
});
//se
$basePipe->get("/jobs", function (Request $req, Response $res) {
    $params = $req->getParams();
        $id = $params["id"];
        //
        $servername = "localhost";	
        $username = "root";	
        $password = "";	
        $dbname = "jobs_app";
        // $servername = getenv('SERVE');
        // $username = getenv('USERNAME');
        // $password = getenv('PASSWORD');
        // $dbname = getenv('DB');
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql_id = "SELECT * FROM jobs WHERE id={$id}";
        $sql_o = "SELECT * FROM jobs";
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
                array("Error" => "No resource with given URL found", "code" => 404, "method"=> $_SERVER['REQUEST_METHOD'], "url" =>  $_SERVER['REQUEST_URI'] )
            );
        }
        return $arr;
        $conn->close();
});

$basePipe->post("/jobs", function (Request $req, Response $res) {
    //
    $servername = "localhost";	
    $username = "root";	
    $password = "";	
    $dbname = "jobs_app";
    //
    $id = randKey();
    $body = $req->getBody();
    $date = new DateTime("now");
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //TODO: SQL STATEMENTS
    $sql = "INSERT INTO jobs (id, title, description, admin_id, created_at, updated_at)
    VALUES ($id, $body->firstname,  $body->lastname,  $body->email, $body->is_admin, 0, $date->format('U'), $date->format('U'))";

    if ($conn->query($sql) === true) {
        echo json_encode(array("Mssg" => "Success", "code" => 200, 'created_at' => date("H:i:s")));
    } else {
        echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
    }
    $conn->close();
});
$basePipe->put("/jobs/:id", function (Request $req, Response $res) {
    $body = $req->getBody();
    $date = new DateTime("now");
    $id = basename($_SERVER['REQUEST_URI']);
    $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //TODO: SQL STATEMENTS
    $sql = "UPDATE jobs SET lastname='Doe', updated_at=$date->format('U') WHERE id=$id";

    if ($conn->query($sql) === true) {
        echo json_encode(array("Mssg" => "Success", "code" => 200, 'updated_at' => date("H:i:s")));
    } else {
        echo json_encode(array("Error" => $conn->error, "code" => 400, "target_id"=> $id));
    }
    $conn->close();
});
$basePipe->delete("/jobs/:id", function (Request $req, Response $res) {
    $body = $req->getBody();
      //
      $servername = "localhost";	
      $username = "root";	
      $password = "";	
      $dbname = "jobs_app";
    //
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //TODO: SQL STATEMENTS
    $sql = "DELETE FROM $this->table WHERE id=$body->id";

    if ($conn->query($sql) === true) {
        echo json_encode(array("Mssg" => "Success", "code" => 200, 'deleted_at' => date("H:i:s")));
    } else {
        echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
    }

    $conn->close();
});
$basePipe->run();
// $basePipe->post("/users/:id", function (Request $req, Response $res) {
//     $body = $req->getBody();
//     $date = new DateTime("now");

//     $uri = $_SERVER['REQUEST_URI'];
//    $res->sendJson(array(array($_SERVER['REQUEST_URI']),"awwe"=>$date->format('U'),"url"=> $uri ,"id"=> basename($uri)));
//     echo array(array($_SERVER['REQUEST_URI']),"awwe"=>$date->format('U'),"url"=> $uri ,"id"=> basename($uri));
// });
// $basePipe->run();
