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
    $faker = Faker\Factory::create();
    //
    $title =  $faker->jobTitle;
    $id = randKey();
 
    $rn = rand(1,100);
    $description = $faker->text($maxNbChars = 400);
      $id2 = $body["id"];
      echo $id2;      
      //
      $arrR = array("iFkOYTHtmAxwQMkc", "fwm2O0oJSZaebAa1", "7f1XAfgmLud1ltuF", "BM8q9uAXrN7RkQVC", "NSQhusBXMb6NNM7b", "xJQJO3bNIdVjscpH", "6zcjqtqEtBM6V4LP", "6SzQp2Lih6EEkSmo", "oaEOfOWpGGNzGl2t", "sCkMziIyhC9uLZG5", "8Zf4YUj7BdqrIqJU", "8PNvOnL3jDumyODP", "gFJTiE4W5MgSXcVw", "AvnDGEzxefP1kH6x", "c7M7HQAvdsQHGOVI", "0NTeCN8L6MvoRFWK", "It5KFv7kr5NjssGa", "cxpx4zPqGBtlXa0M", "Jdrc3MEZ6T4yCkgZ", "J68xJ9ZSxU6rxyDt", "T8hqgjn4KkHhhKc1", "Wuf2dxdgZVw3YOjl", "gwEHWLiWLYcmceBs", "WiO5ZkFovOARA5dh", "mq5MOwvCEapzXZqm", "uMbS26X3d1HTQwmo", "PhJw8uSrf5ODKEsY", "ZTZZUsJeClkjCCC9", "16ziDz138diLFzKT", "Qqnz7iAnUWUDjMK9", "63ci87KgbUfOoApp", "t6kyTSj2D1Ido90i", "mCxZUVucEaN40Rw5", "rvw62Ey15J2mqQj2", "oTCl1mjdgXqfGdaU", "mUQjxahTRt9AM5dp", "XCxsIWaiMG5BYhIv", "2Jjc4yN4oROExBtt", "vGVsCtfnHcg9A8rD", "z5FX3YriCzMRLVlH", "bw8U3Fz7AZRbpxi9", "hR3gmGivaf1bdRXo", "E5209CPyMbGfvYg1", "jlFPAQfYW1U6bLpz", "IMCItD1ObNMTzNBs", "N0K6scdte0XRsBxj", "5AXLCgvPFTNPp8bP", "im9hwxDoWXwmjdLi", "zIB0ZosdQ3sD7kce", "dNniAZVJNkOS1XBq", "T1OMeqIH5KvZsYGs", "r38UcUApfL3PX9gd", "55OyDCKswxzTNbER", "GogGfTC9FB6vdQRN", "y1fkVti62b5oyBgm", "yzEWWqZNp8Mrzgum", "WQlbFKfgjTUYLzFT", "RuxnJRz2QB24VaVM", "ArEzOWiQMzGi92B8", "Z9SEuRHisvJhhEnA", "mKDlWUVnWCRGuG67", "uaoQiRejwTLUr6jZ", "WzdMss0qT397h80E", "CZKEWEoAR068IUvw", "o3S2T9L6JJdEAvVc", "EU15AoUeJm8b1du0", "wXTqd1oslFsd4m6n", "AAW8inntQ2KsdVrI", "tpE7yy5WGcwPiTlc", "qKuJztgqnD1mShvh", "xHqd56EG9hfzpwVL", "mXAShNhXQFrpzff6", "AHBxKgDLHjf4gYk6", "lBwHHbYC82EYCllX", "CLsUgmNyJEZCbDi6", "wINcQCRQU9sPOc3o", "36plybor4FdElLw0", "IVXKuskD7dYe1UV0", "tGrMq17ra6RaD9Sd", "yonKpHySORTV9hGa", "K33xdekDO4KJWeNo", "OYI044Lz8Zc9I5aC", "9RMXJNT8B59wx2Gk", "9I5njBU4VVwmrM6d", "mtBeHWxTLPJvH1Zp", "VTf8rZva63TabTuz", "Pf8YNK5WmWN4ts67", "tQXJm1RiISi7dP69", "h4ljZ075AxsFKJSf", "DL2xLpBvDqGE3RPm", "P1MqG78AFuIQPDnz", "LbX9u9Oi3F27caXZ", "pIR32qAgxdNbtnjq", "dMrq9Lcb1OFFavj3", "T0P0tMbjlqZWqvyY", "SgQECfKobw05xT7Y", "aBpw2Xpd2XV42J0H", "3x8fw9NQSduaMIYh", "u9uiHZU4GjBBTfDV", "eHcIoACg0hl0KUWB"); 

  
    $emp_id = $arrR[$rn];
     
    // $emp_id = $body["emp_id"];
    // $description = $body["description"];
    //
    $sql = "INSERT INTO jobs (job_id ,title, descriptions, employer_id)
    VALUES ('{$id}','{$title}','{$description}','{$emp_id}')";
    interfaceDb($sql, 100, "");
//Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ut cum illo esse officiis quam quibusdam sit dolore quidem quia animi quisquam veniam voluptates obcaecati voluptatibus dolorem accusantium unde sequi?
});
//employer profile >>
$basePipe->post("/create-profile", function (Request $req, Response $res){
    $body = $req->getBody();
    $faker = Faker\Factory::create();
    //
    $id = randKey();
    // $name = $body["name"];
    // $email = $body["email"];
    // $co_name = $body["co_name"];
    //
     $id2 = $body["id"];
     echo $id2." ";
    $name = $faker->name;
    $email = $faker->email;
    $co_name = $faker->company;
    // 
    $sql = "INSERT INTO employer (employer_id,employer_name, email, company_name)
    VALUES ('{$id}','{$name}', '{$email}', '{$co_name}')";
    //
    interfaceDb($sql, 100, "");

});
//seeker profile >>
$basePipe->post("/employee", function (Request $req, Response $res) {
    // use a ID to get a specific job... 
    $body = $req->getBody();
    $faker = Faker\Factory::create();
    //
    $id = randKey();
    $name = $faker->name;
    $email =  $faker->email;
    $bio =   $faker->text($maxNbChars = 300);
    $occupation =  $faker->jobTitle;
    echo $occupation;
    //
    $sql = "INSERT INTO employee (employee_id,employee_name, email, occupation, bio)
        VALUES ('{$id}','{$name}', '{$email}', '{$occupation}', '{$bio}')";

    interfaceDb($sql, 100, "");
});
//applly
$basePipe->post("/job-application", function (Request $req, Response $res) {
    $body = $req->getBody();
    $zz = $body['id'];
    echo $zz . " ";
    // $employer_id = $body['employer_id'];
    // $job_id = $body['job_id'];
    // $employee_id = $body['employee_id'];

$arrE = array("iFkOYTHtmAxwQMkc", "fwm2O0oJSZaebAa1", "7f1XAfgmLud1ltuF", "BM8q9uAXrN7RkQVC", "NSQhusBXMb6NNM7b", "xJQJO3bNIdVjscpH", "6zcjqtqEtBM6V4LP", "6SzQp2Lih6EEkSmo", "oaEOfOWpGGNzGl2t", "sCkMziIyhC9uLZG5", "8Zf4YUj7BdqrIqJU", "8PNvOnL3jDumyODP", "gFJTiE4W5MgSXcVw", "AvnDGEzxefP1kH6x", "c7M7HQAvdsQHGOVI", "0NTeCN8L6MvoRFWK", "It5KFv7kr5NjssGa", "cxpx4zPqGBtlXa0M", "Jdrc3MEZ6T4yCkgZ", "J68xJ9ZSxU6rxyDt", "T8hqgjn4KkHhhKc1", "Wuf2dxdgZVw3YOjl", "gwEHWLiWLYcmceBs", "WiO5ZkFovOARA5dh", "mq5MOwvCEapzXZqm", "uMbS26X3d1HTQwmo", "PhJw8uSrf5ODKEsY", "ZTZZUsJeClkjCCC9", "16ziDz138diLFzKT", "Qqnz7iAnUWUDjMK9", "63ci87KgbUfOoApp", "t6kyTSj2D1Ido90i", "mCxZUVucEaN40Rw5", "rvw62Ey15J2mqQj2", "oTCl1mjdgXqfGdaU", "mUQjxahTRt9AM5dp", "XCxsIWaiMG5BYhIv", "2Jjc4yN4oROExBtt", "vGVsCtfnHcg9A8rD", "z5FX3YriCzMRLVlH", "bw8U3Fz7AZRbpxi9", "hR3gmGivaf1bdRXo", "E5209CPyMbGfvYg1", "jlFPAQfYW1U6bLpz", "IMCItD1ObNMTzNBs", "N0K6scdte0XRsBxj", "5AXLCgvPFTNPp8bP", "im9hwxDoWXwmjdLi", "zIB0ZosdQ3sD7kce", "dNniAZVJNkOS1XBq", "T1OMeqIH5KvZsYGs", "r38UcUApfL3PX9gd", "55OyDCKswxzTNbER", "GogGfTC9FB6vdQRN", "y1fkVti62b5oyBgm", "yzEWWqZNp8Mrzgum", "WQlbFKfgjTUYLzFT", "RuxnJRz2QB24VaVM", "ArEzOWiQMzGi92B8", "Z9SEuRHisvJhhEnA", "mKDlWUVnWCRGuG67", "uaoQiRejwTLUr6jZ", "WzdMss0qT397h80E", "CZKEWEoAR068IUvw", "o3S2T9L6JJdEAvVc", "EU15AoUeJm8b1du0", "wXTqd1oslFsd4m6n", "AAW8inntQ2KsdVrI", "tpE7yy5WGcwPiTlc", "qKuJztgqnD1mShvh", "xHqd56EG9hfzpwVL", "mXAShNhXQFrpzff6", "AHBxKgDLHjf4gYk6", "lBwHHbYC82EYCllX", "CLsUgmNyJEZCbDi6", "wINcQCRQU9sPOc3o", "36plybor4FdElLw0", "IVXKuskD7dYe1UV0", "tGrMq17ra6RaD9Sd", "yonKpHySORTV9hGa", "K33xdekDO4KJWeNo", "OYI044Lz8Zc9I5aC", "9RMXJNT8B59wx2Gk", "9I5njBU4VVwmrM6d", "mtBeHWxTLPJvH1Zp", "VTf8rZva63TabTuz", "Pf8YNK5WmWN4ts67", "tQXJm1RiISi7dP69", "h4ljZ075AxsFKJSf", "DL2xLpBvDqGE3RPm", "P1MqG78AFuIQPDnz", "LbX9u9Oi3F27caXZ", "pIR32qAgxdNbtnjq", "dMrq9Lcb1OFFavj3", "T0P0tMbjlqZWqvyY", "SgQECfKobw05xT7Y", "aBpw2Xpd2XV42J0H", "3x8fw9NQSduaMIYh", "u9uiHZU4GjBBTfDV", "eHcIoACg0hl0KUWB"); 
//
$arrJ = ["YWPnHUtAU9F3CCpQ", "cDcnMZ5zZ8RdxVFS", "T6pVVQdvdXEMEPpu", "1nANhaAUsO6itOb3", "KGpyjVAPywEwvn5S", "g2tQQYiG5OjpYnEa", "0KzFwgrF6FuovRn3", "jFvnjtoffRmqYfRu", "hYzbLWQDni2G5L1P", "vaK3GXWdJ6YeJdYr", "XAx2xwRWoEBMAmES", "XJnd3mfweyGkn03Z", "6pxcocTp0SbaB6MS", "OF9HDXAJ5VLR6BID", "FP1iCNg7Xq3fqulj", "9XIDeQ4doAE3iVmW", "QSdBqaZGUh9sF2ju", "crAn0gAFK82dGBsT", "994d47HWFKNuO4Ro", "tOHDlaiSf1Y0otat", "V6x6wHJYSovCMsfe", "bcWzYeWP6np0wawV", "ff6tkrpQuFah5H4q", "igvonXath9sGKZ3S", "vzOK2x1gZYGHYlif", "9w7lEzRAQ9gq6k0Q", "eTl9cy39Y8OHCBh3", "N4d0vF7ySfz5PSbD", "WYHTMHIfJ62MKkBg", "n55XELtVUWNZzPdV", "kZOvRDsoL613K8wG", "k88jr7L8LEKvcWK0", "yf7Mk6bQRJJ4oUYO", "yqMCzbcw8QfuZ2Pc", "antRFmx6X2zw2g31", "tyEpBYQo0ztCMOvN", "xG0IyS7nCUYQnsBX", "rNnJHrSYDg5Smi3N", "yPDVtFweIx9s1VqR", "Al7CHHsA6NfXMGnY", "YyozIoL19goyFjbn", "hrI5LgiVwjV6eHRJ", "1wd43DfTWbbVZqaY", "pfM4bgowA6a7bY9O", "7ehyCCYMuHQRP9Nt", "vwefZXOlX8VmQWcs", "G73XxhW420ORPuOj", "6rFwlKvIYd7lFxfQ", "vQe23va3MquTimg7", "ofcRNPYbwj2GHdaW", "bTSbXlsTZhoZbo4G", "hDVBnDvd2fVk2LQh", "mNc4MPMEECnPPn0b", "UP8nzuSltZlbS5dd", "ZZxI27Tfuf8lj6vL", "o3xaprpV3pHB4ZPV", "dxrUCehsXLlJ1XCt", "KqbjdcitK5sLPaJ1", "VkvOcoZXaOyEM9Y5", "e5UoMTGzxf7mgG7X", "3nwcxHgO4BS1bQzX", "bhx3b9zoLgL6Zhgk", "1OJ7Nn0HLI2o0O2x", "ZlcA0PtkvXyeyhzl", "kuCZtIea416UBs2N", "W4yQxoQDCb04g3X8", "GSIKidF8T2O1K6GN", "3ASjb1Wvwd51xRh5", "hKtCixtrAbHtrsga", "ErWne3yzkWX9Hybe", "db6WD6zFe24COeJ1", "igvB8ozpjOEched9", "fjZSEVqqKIuN6ICi", "NVKEL0AXQdBZ9GCK", "yMNziv9wbgO0ZlSy", "8SVOXOCAwzFW7oSp", "ZsqbIueYRLHZgn7k", "3TFs42JMxmvH255e", "E05VJ7O7dnDU9DXU", "dJRLt59iQikuZk6r", "lY88EWls1qGJjsQD", "bp3uxtPNDqyEbX7q", "R6hTeA2aDrrWjcWT", "qtVYg0viDIXutd12", "hICKHUArdF2897ed", "1hM3OGArYEZSrUoV", "YjzSJGN6lWecdKFJ", "OLOmhy4KlAf3L6Yr", "DGXszPkm2HHLNaid", "mxITcQNtthtmiflQ", "Qrs4CdPnrnuL7wog", "HqFG0QnpwV8gdx1G", "7ERtIp6GC3XZ6Qeq", "qWt2jjxhKUsoUVOS", "EyR7HRZ97hq4HWnu", "wXEoPuG2nJbSqlA2", "z04JvMB6d78ND94Y", "GDzA1zzYmwWucXnu", "b5qwM2SdyvHemkUn", "BXysdnDdHeE5FqRt"];
//
$arrS = ["J5d0puTPA4cmgSmw", "L0RzSu13kNWew11J", "1tG1Bba41nSMrvOY", "jc1z24kU62qYVfdO", "ZXx5iYgkBBd7I3T2", "ntzkn7PNwlk99m6j", "jtqmYYceCwNw2EAu", "Hupx79mwrpJMig0M", "YKNQvNdd1djQEHNZ", "FkfqeqpoBGBwWt1U", "JbF3gQb2w2Momfcg", "auUIgyAadtvLK83w", "Cr06wl6QG0nbbKKI", "IygQBILkKSX25SJK", "g29GOO4Z18YohBjD", "JbCZhjzvDOvLZOe0", "OJ0MA1EWbzt0UroR", "x44xmbVjPtxwtnac", "PrAIPwyYyZwS7JNH", "RMpKgSaOi0XIH3y9", "K3h6ImKRvVeBfjaL", "3Mex4WAMYdi3emzB", "vHogmpjfFtpKIo0J", "MfzivPMIgu4nJS2D", "mHUjd76THDIN1IIV", "kIU5fTqGoasCCsNz", "Aty6VZaEoR302wUV", "tbTQLjcbfy3pJtuq", "g6N22sUOWRF1RbDR", "QHFBrf3jvcLqvwdS", "CHe4UFXwlxSaaUxA", "HSRZLMDEr3nZoIkO", "5xagapwTN0jqeVk8", "EIDpZCYY5Naham5L", "RQgdmgoDyVxsgi5O", "BuR9p3YNQuBzf37v", "Sjo2eTfrr3fJ9s9y", "2emSukk130TOVeY1", "SDMiPzEO83G687N5", "a8m0FbKEkxltPzKN", "0gbMUnvt2iCVNB1y", "7pnVvhUbTEsw40q6", "jPCc6QfRMS0EwTQP", "qQAKyPVv4NgsHUna", "mXkS46RR8cHgszxr", "Z6N4PdCk7solsuNE", "M2xEX324G8Aj6cte", "7Np1pfUMZb2BW6qP", "df2Iu7q73Smgp6zL", "8D2xUqu7CHYG6r6H", "1TGk2psR9LRleTwu", "lZNsqVTR93YWVc3t", "TntAn7qxbzxcQxbx", "ks4b50cXEgM44SeU", "t3L5dqK2ManeCZns", "L4OxzqUQ8CfxP5jb", "2eRi6AGw64K3AHca", "OJCBkWwkJIMwHVMn", "RZhp3wrTW4DDT6BV", "N4RIvvwDfB0hP5l4", "T86Jpw47mAxTs5qi", "wZgvJYjhEJf8eOn3", "QZrOxtIneqjUbAWn", "oI4IHU0BzlNlJcaJ", "oyp8iS3eTISQR1ET", "yZIqbDNDqUaZhKer", "nSybEj7pH1AWC2E4", "hHLgMU3H1BxrfwXK", "EIGj0GEy3XLFKrub", "eLAFhuuJKCYvyyLV", "qEWpNi3OwyjhMwyc", "scgm3AE0nrnJ5IgG", "yyhZLRDdcKhByIks", "H4r1tDqMEDE8tSC3", "9fluztnCvPPmkuSf", "5dTapdGXKfkMz6Ss", "Igd29SAAIo0JQE19", "Xy47ha1c6vkyBGx7", "K67JTcvQpSVL8ori", "Y27J0846jB9N7F2u", "wGwEzzFHlF6tjrNs", "I6kwtJa7g5nD7FZP", "cVkVX7D1helLh4bG", "ZVs7qnjTraB7urHq", "XzbmlpPIGQVWjPiq", "WbqCFGLgmm5Wl17i", "x0UO2L9IwfNf5YCR", "2zG5rOEUH1SLWquS", "N4UIEhLOWHwdqeHS", "sJ1kqnAVYh4HMSvK", "VEExocmVLPoQc4Gv", "3sIkmb87ed19rMQc", "kRfzk4t9dMvy6gvN", "3VWQufW1WEF1v12g", "5URpj4TPhewbT461", "ddFujmIZoKeI7lDR", "AYSJssDrOeWUFKML", "EmDXyLePGMyfjztS", "tyRsxTemMSxOuKkh", "il9wqLV25WK4mhM0"];
    // get employee_id and then make fake data
    $rn = rand(1,100);
    $rnu = rand(1,100);
    $rm = rand(1,100);
    //
    $employer_id = $arrE[$rn];
    $job_id = $arrJ[$rm];
    $employee_id = $arrS[$rnu];
    //
    $sql = "INSERT INTO `applied_jobs` (`employer_id`, `job_id`, `employee_id`) VALUES ('{$employer_id}', '{$job_id}', '{$employee_id}')";
    interfaceDb($sql,100,0);

});

$basePipe->run();
