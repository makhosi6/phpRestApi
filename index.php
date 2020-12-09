<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;
use ElementaryFramework\WaterPipe\WaterPipe;

require "./helpers/store.php";
//
$basePipe = new WaterPipe;
//

$basePipe->get("/", function (Request $req, Response $res) {

});

$basePipe->get("/api/v1/:table/list", function (Request $req, Response $res) {
  
});
$basePipe->post("/api/v1/:table/", function (Request $req, Response $res) {

});
//PUT
$basePipe->put("api/v1/:table/:id/", function (Request $req, Response $res) {
   
});
$basePipe->delete("/api/v1/:table/:id/", function (Request $req, Response $res) {


});
$basePipe->run();
