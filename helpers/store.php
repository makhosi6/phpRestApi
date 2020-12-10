<?php

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__, '..\config\.env');
$dotenv->load();
/**
     *Methods.
     *
     * @param method => insert = 100
     * @param method => select = 10
     */
function interfaceDb($sql_query, $method){
    try {
        $username = $_ENV['USERNAME'];
        $servername = $_ENV['SERVER'];
        $password = $_ENV['PASSWORD'];
        $dbname = $_ENV['DB'];
        $port = $_ENV['PORT'];
    // 
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        /// use exec() because no results are returned
        if ($method === 'insert') {
            $conn->exec($sql_query);
            echo "Success!!! @ " . date("H:i:s");
        } elseif ($method === 'select') {
            // if ($id !== 0) {
            //     $st = $conn->prepare($sql_query);
            //     $st->execute([$id]);
            // } elseif ($id === 0) {
                $st = $conn->query($sql_query);
            // }
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
        echo  "ERROR". ": " . $e->getMessage();
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
};
function cors(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
};
$servername = "localhost";	
$username = "root";	
$password = "";	
$dbname = "jobs_app";
$port = 3307;