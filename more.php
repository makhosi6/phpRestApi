<?php


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