<?php
// bd_connect variables
$host = "localhost";
$user = "cheeckco_userdb";
$pass = "ZONCWGaWg8K1Gr5zMe";
$db   = "cheeckco_db";

$dbcon = new MySqli("$host","$user","$pass","$db");
	if($dbcon->connect_error) {
		echo "connect error";
	}
	//else { echo "connect ok";}
?>
