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
$protected_id = anti_injection($_GET['data_id']);

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_email = anti_injection($obj['data_email']);
// $pass  = anti_injection($obj['data_password']);
// $protected_pass  = base64_encode($pass);

$json_data_return = array();
if ($protected_id != null) {
  $sql = $dbcon->query("SELECT * FROM cheeck_signature WHERE 
    hashkey = '$protected_hashkey' AND 
    id = '$protected_id' AND 
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

        $sql_5 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
        id_client = $user_client
        ORDER BY id DESC LIMIT 1");
        $company_last = $sql_5->fetch_array();
        $company_id_return = $company_last['id_company'];

        if ($company_id_return != null) {
          $sql_6 = $dbcon->query("SELECT * FROM cheeck_properties WHERE 
          id = $company_id_return");
          $company_last_return = $sql_6->fetch_array();
          $company_name = $company_last_return['company'];
        } 
        else {
          $company_name = 'realize seu primeiro check in';
        }

        $json_data_return[] = array(
          'id' => $data_return['id'],
          'email' => $data_return['email'],
          'name' => $data_return['name'],
          'password' => base64_decode($data_return['password']),
          'checkin' => $number_checkin,
          'company' => $number_company,
          'awards' => $number_awards,
          'companylast' => $company_name,
          'message' => 'success_dasboard',
        );
      }
      echo json_encode($json_data_return);
    }
    else {
      $json_data_return[] = array(
        'message' => 'error_id_data',
      );
      echo json_encode($json_data_return);
    }
} 
else {
  $json_data_return[] = array(
    'message' => 'error_id_empty',
  );
  echo json_encode($json_data_return);
}

?>
