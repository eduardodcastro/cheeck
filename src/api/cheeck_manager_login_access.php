<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

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
$protected_pass = anti_injection($_GET['data_password']);
// $protected_pass = base64_encode($pass);
// echo $protected_pass;

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_email = anti_injection($obj['data_email']);
// $pass  = anti_injection($obj['data_password']);
// $protected_pass  = base64_encode($pass);

$json_data_return = array();
if ($protected_email != null) {
    if (validate_email($protected_email)) {
        if ($protected_pass != null) {
            $sql = $dbcon->query("SELECT * FROM cheeck_properties WHERE 
              hashkey = '$protected_hashkey' AND 
              email = '$protected_email' AND 
              pass_manager = '$protected_pass'"
            );
            if (mysqli_num_rows($sql) == 1) {
              // $json_data_return = array();
              while ($data_return = $sql->fetch_array()) {
                $user_properties = $data_return['id'];

                $sql_2 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
                id_company = $user_properties");
                $number_checkin = mysqli_num_rows($sql_2);

                $sql_3 = $dbcon->query("SELECT SEC_TO_TIME(AVG(TIME_TO_SEC(register))) FROM cheeck_checkin WHERE 
                status = 1 AND 
                id_company = $user_properties");
                $db_row_3 = $sql_3->fetch_array();
                $average_hour = $db_row_3[0];

                $tmp = explode(".", $average_hour);
                $average = $tmp[0];

                $sql_4 = $dbcon->query("SELECT * FROM cheeck_awards WHERE 
                id_company = $user_properties");
                $number_awards = mysqli_num_rows($sql_4);

                // $sql_5 = $dbcon->query("SELECT * FROM cheeck_photos_client WHERE 
                // id_client = $user_client");
                // $photo_return = $sql_5->fetch_array();

                $json_data_return[] = array(
                  'id' => $data_return['id'],
                  'email' => $data_return['email'],
                  'company' => $data_return['company'],
                  'password' => $data_return['pass_manager'],
                  'checkin' => $number_checkin,
                  'average' => $average,
                  'awards' => $number_awards,
                  // 'photo' => $photo_return['file'],
                  'message' => 'success_login',
                );
              }
              echo json_encode($json_data_return);
            }
            else {
              $json_data_return[] = array(
                'message' => 'error_login',
              );
              echo json_encode($json_data_return);
            }
        }
        else {
          $json_data_return[] = array(
            'message' => 'error_pass_empty',
          );
          echo json_encode($json_data_return);
        }
    } 
    else {
      $json_data_return[] = array(
        'message' => 'error_email_invalid',
      );
      echo json_encode($json_data_return);
    }
} 
else {
  $json_data_return[] = array(
    'message' => 'error_email_empty',
  );
  echo json_encode($json_data_return);
}

?>
