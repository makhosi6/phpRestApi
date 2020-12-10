<?php
require "./vendor/autoload.php";
use ElementaryFramework\WaterPipe\HTTP\Request\Request;
use ElementaryFramework\WaterPipe\HTTP\Response\Response;

// include "./helpers/store.php";


class Controller
{
    public function __construct()
    {
      
    }
    public function test()
    {
        echo "TEST";
    }
    public function find(Request $req, Response $res)
    {
       
    }
    public function create(Request $req, Response $res)
    {
       
        
    }
    public function update(Request $req, Response $res)
    {
         //PATCH is the actual method.
     
    }
    public function dump(Request $req, Response $res)
    {
        
    }
}
