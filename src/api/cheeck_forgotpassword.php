<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

include_once 'sendgridForgotPassword.php';

// variables :: 
// hashkey 
// email 
// name 
// pass 
// status

$json = file_get_contents('php://input');
$obj = json_decode($json, true);


$protected_hashkey = $_GET['data_hashkey'];
$protected_email = anti_injection($_GET['data_email']);

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_email = anti_injection($obj['data_email']);
// $pass  = anti_injection($obj['data_password']);
// $protected_pass  = base64_encode($pass);

$json_data_return = array();
if ($protected_hashkey == 'K_@cjg2w*n9C$$2${J~s') {
    if ($protected_email != null) {
        if (validate_email($protected_email)) {
          $sql = $dbcon->query("SELECT * FROM cheeck_signature WHERE email = '$protected_email'");
            if (mysqli_num_rows($sql) > 0) {
              $db_row = $sql->fetch_array();

              $json_data_return[] = array(
                'sign_name' => $db_row['name'],
                'sign_email' => $db_row['email'],
                'sign_password' => base64_decode($db_row['password']),
              );

              echo json_encode($json_data_return);
              sendEmail($db_row['name'],$db_row['password'],$db_row['email']);
              
            }
            else {
              echo json_encode("error_email_exist");
            }
        }
        else {
            echo json_encode("error_email_invalid");
        }

    }
    else {
        echo json_encode("error_email_empty");
    }
}
else {
  echo json_encode("error_hashkey");
}

?>
