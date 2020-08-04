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