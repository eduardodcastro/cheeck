<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

// variables :: 
// hashkey 
// email 
// pass 

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$protected_hashkey = $_GET['data_hashkey'];
$protected_id = anti_injection($_GET['data_id']);
$protected_email = anti_injection($_GET['data_email']);
$tmp_pass = anti_injection($_GET['data_password']);
$tmp_pass_update = anti_injection($_GET['data_password_update']);

$protected_pass = base64_encode($tmp_pass);
$protected_pass_update = base64_encode($tmp_pass_update);


$json_data_return = array();

if ($protected_pass != null && $protected_pass_update != null) {
	
	$sql_2 = $dbcon->query("SELECT * FROM cheeck_signature WHERE 
		password = '$protected_pass'");
	
	if (mysqli_num_rows($sql_2) > 0) {
		try {
			$dbcon->query("UPDATE cheeck_signature SET password = '$protected_pass_update' WHERE (hashkey = '$protected_hashkey' AND id = '$protected_id' AND email = '$protected_email' AND password = '$protected_pass')");
			echo json_encode("success_password");
		}
		catch(Exception $e) {
			echo json_encode("error_password");
		}
	}
	else {
		echo json_encode("error_password");
	}
} 
else {
  echo json_encode("error_password_empty");
}
?>
