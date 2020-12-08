
<?php
$basePipe->get("/get-employee", function (Request $req, Response $res) {
    $params = $req->getParams();
    $paramid = $params["id"];
    cors();
    //
    $sql_id = "SELECT * FROM employee WHERE employee_id='{$paramid}'";
    $sql_o = "SELECT * FROM employee";

    $sql = (isset($paramid)) ? $sql_id : $sql_o;
    $res->sendJson(interfaceDb($sql, 10));

});
//
$basePipe->get("/get-jobs", function (Request $req, Response $res) {
    $params = $req->getParams();
    $paramId = $params["id"];
    cors();
    //
    $sql_id = "SELECT * FROM jobs WHERE job_id={$paramId}";
    $sql_o = "SELECT * FROM jobs";
    $sql = (isset($paramid)) ? $sql_id : $sql_o;
    $res->sendJson(interfaceDb($sql, 10));
});
///
$basePipe->get("/applicants", function (Request $req, Response $res) {
    cors();
    $params = $req->getParams();
    //
    $paramId = $params["id"];
    $sql = "SELECT * FROM applied_jobs WHERE employer_id='{$paramId}'";
    $res->sendJson(interfaceDb($sql, 10));
});
$basePipe->get("/get-employer", function (Request $req, Response $res) {
    $params = $req->getParams();
    $paramid = $params["id"];
    cors();
    //
    $sql_o = "SELECT * FROM employer";
    $sql_id = "SELECT * FROM employer WHERE employer_id='{$paramid}'";
    $sql = (isset($paramid)) ? $sql_id : $sql_o;
    $res->sendJson(interfaceDb($sql, 10));
});
//
$basePipe->post("/create-job", function (Request $req, Response $res) {
    $body = $req->getBody();
    cors();
    //
    $id = randKey();
    $emp_id = $body["emp_id"];
    $description = $body["description"];
    $sql = "INSERT INTO jobs (job_id ,title, descriptions, employer_id)
    VALUES ('{$id}','{$title}','{$description}','{$emp_id}')";
    interfaceDb($sql, 100);
});
///
$basePipe->post("/create-profile", function (Request $req, Response $res){
    $body = $req->getBody();
    cors();
    //
    $id = randKey();
    $name = $body["name"];
    $email = $body["email"];
    $co_name = $body["co_name"];
    $sql = "INSERT INTO employer (employer_id,employer_name, email, company_name)
    VALUES ('{$id}','{$name}', '{$email}', '{$co_name}')";
    //
    interfaceDb($sql, 100);
});
//
$basePipe->post("/employee", function (Request $req, Response $res) {
    $body = $req->getBody();
   cors();
    //
    $id = randKey();
    $name = $body["name"];
    $email =  $body["email"];
    $bio =   $body["bio"];
    $occupation =  $body["occupation"];
    $sql = "INSERT INTO employee (employee_id,employee_name, email, occupation, bio)
        VALUES ('{$id}','{$name}', '{$email}', '{$occupation}', '{$bio}')";
    interfaceDb($sql, 100);
});
//applly
$basePipe->post("/apply", function (Request $req, Response $res) {
    $body = $req->getBody();
    cors();
    //
    $employer_id = $body['employer_id'];
    $job_id = $body['job_id'];
    $employee_id = $body['employee_id'];
    $sql = "INSERT INTO `applied_jobs` (`employer_id`, `job_id`, `employee_id`) VALUES ('{$employer_id}', '{$job_id}', '{$employee_id}')";
    interfaceDb($sql,100);
});