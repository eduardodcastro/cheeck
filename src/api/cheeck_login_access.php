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
$pass  = anti_injection($_GET['data_password']);
$protected_pass  = base64_encode($pass);
// echo $protected_pass;

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_email = anti_injection($obj['data_email']);
// $pass  = anti_injection($obj['data_password']);
// $protected_pass  = base64_encode($pass);

$json_data_return = array();
if ($protected_email != null) {
    if (validate_email($protected_email)) {
        if ($protected_pass != null) {
            $sql = $dbcon->query("SELECT * FROM cheeck_signature WHERE 
              hashkey = '$protected_hashkey' AND 
              email = '$protected_email' AND 
              password = '$protected_pass' AND 
              status = 1"
            );
            if (mysqli_num_rows($sql) == 1) {
              // $json_data_return = array();
              while ($data_return = $sql->fetch_array()) {
                $user_client = $data_return['id'];

                $sql_2 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
                id_client = $user_client");
                $number_checkin = mysqli_num_rows($sql_2);

                $sql_3 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
                id_client = $user_client
                GROUP BY id_company");
                $number_company = mysqli_num_rows($sql_3);

                $sql_4 = $dbcon->query("SELECT * FROM cheeck_awards WHERE 
                id_client = $user_client");
                $number_awards = mysqli_num_rows($sql_4);

                $sql_5 = $dbcon->query("SELECT * FROM cheeck_photos_client WHERE 
                id_client = $user_client");
                $photo_return = $sql_5->fetch_array();

                $json_data_return[] = array(
                  'id' => $data_return['id'],
                  'email' => $data_return['email'],
                  'name' => $data_return['name'],
                  'password' => base64_decode($data_return['password']),
                  'checkin' => $number_checkin,
                  'company' => $number_company,
                  'awards' => $number_awards,
                  'photo' => $photo_return['file'],
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
