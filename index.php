<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;
use ElementaryFramework\WaterPipe\WaterPipe;

require "./store/store.php";
//
$basePipe = new WaterPipe;
//

$basePipe->get("/api/v2/:table/:id", function (Request $req, Response $res) {
    //log/
    // $GLOBALS['servername']  = "localhost";
    // $GLOBALS['username'] = "root";
    // $GLOBALS['password'] = "";
    // $GLOBALS['dbname'] = "jobs_app";
    // $id = basename($_SERVER['REQUEST_URI']);
    // echo json_encode(array("method"=> $_SERVER['REQUEST_METHOD'], "id"=>$id,"url" =>  $_SERVER['REQUEST_URI']));

    $x = $_SERVER['REQUEST_URI'];
    $y = explode("/", $x);
    $a = $y[3];
    $b = $y[4];

    echo $a . "   " . $b . "    " . $x;

});

$basePipe->get("/api/v1/:table/list", function (Request $req, Response $res) {
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
    // $servername = getenv('SERVE');
    // $username = getenv('USERNAME');
    // $password = getenv('PASSWORD');
    // $dbname = getenv('DB');
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
            array("Error" => "No resource with given URL found", "code" => 404, "method" => $_SERVER['REQUEST_METHOD'], "url" => $_SERVER['REQUEST_URI'], "_" => $sql)
        );
    }
    echo json_encode($arr);
    $conn->close();
});
$basePipe->post("/api/v1/:table/", function (Request $req, Response $res) {
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    $port = 3307;
    //
    $date = date('Y-m-d H:i:s');
    $id = randKey();
    $body = $req->getBody();
    //
    //  $is_admin = $body["is_admin"];
    //  $xero = "0";
    //
    $x = $_SERVER['REQUEST_URI'];
    $y = explode("/", $x);
    $table = $y[3];
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
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
        $sql = "INSERT INTO $table (id,firstname,lastname,email)
        VALUES ('{$id}', '{$firstname}', '{$lastname}', '{$email}')";
    }

    if ($conn->query($sql) === true) {
        echo json_encode($body);
        // echo json_encode(array("mssg" => "Success", "code" => 200, 'created_at' => $date));
    } else {
        echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
    }
    $conn->close();
});
//PUT
$basePipe->put("api/v1/:table/:id/", function (Request $req, Response $res) {
    $body = $req->getBody();
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    $port = 3307;
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
        echo json_encode(array("Mssg" => "Success", "code" => 200, "_" => $sql, 'updated_at' => $date, "date" => $date));
    } else {
        echo json_encode(array("Error" => $conn->error, "code" => 400, "_" => $sql, "target_id" => $id));
    }
    $conn->close();
});
$basePipe->delete("/api/v1/:table/:id/", function (Request $req, Response $res) {
    $body = $req->getBody();
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    $port = 3307;
    //
    $date = date('Y-m-d H:i:s');
    $x = $_SERVER['REQUEST_URI'];
    $y = explode("/", $x);
    $table = $y[3];
    $id = $y[4];
    //
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //TODO: SQL STATEMENTS
    $sql = "DELETE FROM $table WHERE id='{$id}'";

    if ($conn->query($sql) === true) {
        echo json_encode(array("Mssg" => "Success, delete a record from  $table", "code" => 200, 'deleted_at' => $date));
    } else {
        echo json_encode(array("mssg" => $conn->error, "code" => 500, "_" => $sql));
    }

    $conn->close();
});
$basePipe->run();
