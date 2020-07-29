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

$basePipe->get("/xp", function (Request $req, Response $res) {
    echo "IT WORKS, BUDDDY.";
});

$basePipe->run();