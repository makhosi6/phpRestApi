<?php
spl_autoload_register('autoLoader');

function autoLoader($class){
    $path = "./helpers/".$class.".php";
    if(!file_exists($path)){
        return false;
    }
    include_once $path;
};