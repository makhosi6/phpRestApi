<?php

// Require composer autoload file
require "./vendor/autoload.php";
// Require the main WaterPipe class
use ElementaryFramework\WaterPipe\HTTP\Request\Request;

// Require the Request class
use ElementaryFramework\WaterPipe\HTTP\Response\Response;
// Require the Response class
use ElementaryFramework\WaterPipe\WaterPipe;

// Create the base pipe
$basePipe = new WaterPipe;
//
function interfaceDb($sql_query, $method, $id)
{
    //if method = insert = 100
    //if method = select = 10
    try {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "jobs_app";
// 
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        /// use exec() because no results are returned
        if ($method === 100) {
            $conn->exec($sql_query);
            echo "Success!!! @ " . date("H:i:s");
        } elseif ($method === 10) {
            if ($id !== 0) {
                $st = $conn->prepare($sql_query);
                $st->execute([$id]);
            } elseif ($id === 0) {
                $st = $conn->query($sql_query);
            }
            $arr = [];
            while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
                array_push($arr,
                    $row
                );
            }
            return $arr;
        }
        //
    } catch (PDOException $e) {
        echo ERROR . ": " . $e->getMessage();
    }
    $conn = null;
}
//
function randKey($length = 16){
    $newstring = "";
    if ($length > 0) {
        while (strlen($newstring) < $length) {
            $randnum = mt_rand(0, 61);
            if ($randnum < 10) {
                $newstring .= chr($randnum + 48);
            } elseif ($randnum < 36) {
                $newstring .= chr($randnum + 55);
            } else {
                $newstring .= chr($randnum + 61);
            }
        }
    }
    return $newstring;
}
//get a specific employee
$basePipe->get("/get-employee", function (Request $req, Response $res) {

    $params = $req->getParams();
    // $param1 = $params["name"];
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    //
    $sql = "SELECT * FROM employee";
    //
    $id = "MDbuAPQ8btk01kU0";
    $res->sendJson(interfaceDb($sql, 10,$id));

});
//jobs
$basePipe->get("/get-jobs", function (Request $req, Response $res) {
    $params = $req->getParams();
    // $param1 = $params["name"];
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    //
    $sql = "SELECT * FROM jobs";
    //
    $id = "MDbuAPQ8btk01kU0"; 
    $res->sendJson(interfaceDb($sql, 10,0));
});
//get a specific employer >>
$basePipe->get("/get-employer", function (Request $req, Response $res) {
    $params = $req->getParams();
    // $param1 = $params["name"];
    //
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "jobs_app";
    //
    $sql = "SELECT * FROM employer";
    //
    $id = "5QsJlKEEqh6MWBZR";
    $res->sendJson(interfaceDb($sql, 10,$id));

});
//create-job >>
$basePipe->post("/create-job", function (Request $req, Response $res) {
    $body = $req->getBody();
    $id = randKey();
    $emp_id = $body["emp_id"];
    $description = $body["description"];
    //
    $sql = "INSERT INTO jobs (job_id ,title, descriptions, employer_id)
    VALUES ('{$id}','{$title}','{$description}','{$emp_id}')";
    interfaceDb($sql, 100, "");
//
});
//employer profile >>
$basePipe->post("/create-profile", function (Request $req, Response $res){
    $body = $req->getBody();
    //
    $id = randKey();
    $name = $body["name"];
    $email = $body["email"];
    $co_name = $body["co_name"];
    // 
    $sql = "INSERT INTO employer (employer_id,employer_name, email, company_name)
    VALUES ('{$id}','{$name}', '{$email}', '{$co_name}')";
    //
    interfaceDb($sql, 100, "");

});
//seeker profile >>
$basePipe->post("/employee", function (Request $req, Response $res) {
    $body = $req->getBody();
    //
    $id = randKey();
    $name = $body["name"];
    $email =  $body["email"];
    $bio =   $body["bio"];
    $occupation =  $body["occupation"];
    //
    $sql = "INSERT INTO employee (employee_id,employee_name, email, occupation, bio)
        VALUES ('{$id}','{$name}', '{$email}', '{$occupation}', '{$bio}')";

    interfaceDb($sql, 100, "");
});
//applly
$basePipe->post("/job-application", function (Request $req, Response $res) {
    $body = $req->getBody();
//
    $employer_id = $body['employer_id'];
    $job_id = $body['job_id'];
    $employee_id = $body['employee_id'];
    //
    $sql = "INSERT INTO `applied_jobs` (`employer_id`, `job_id`, `employee_id`) VALUES ('{$employer_id}', '{$job_id}', '{$employee_id}')";
    interfaceDb($sql,100,0);

});

$basePipe->run();
