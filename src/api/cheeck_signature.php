<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

include_once 'sendgridEmail.php';

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
$protected_name = anti_injection($_GET['data_name']);
$pass  = anti_injection($_GET['data_password']);
$protected_pass  = base64_encode($pass);
// echo $protected_pass;

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_email = anti_injection($obj['data_email']);
// $pass  = anti_injection($obj['data_password']);
// $protected_pass  = base64_encode($pass);

if ($protected_hashkey == 'K_@cjg2w*n9C$$2${J~s') {
    if ($protected_email != null) {
        if (validate_email($protected_email)) {
            if ($protected_name != null) {
                if ($protected_pass != null) {
                    $sql = $dbcon->query("SELECT * FROM cheeck_signature WHERE email = '$protected_email'");
                    if (mysqli_num_rows($sql) > 0) {
                        echo json_encode("error_email_exist");
                    }
                    else {
                        $dbcon->query("INSERT INTO cheeck_signature(email, name, password) VALUES('$protected_email','$protected_name','$protected_pass')");
                        echo json_encode($dbcon->insert_id);

                        sendEmail($protected_name,$protected_pass,$protected_email);
                    }
                }
                else {
                    echo json_encode("error_pass_empty");
                }

            }
            else {
                echo json_encode("error_name_empty");
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
