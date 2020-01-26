<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

// variables :: 
// id
// hashkey 
// id_client 
// id_company
// register 
// status

$json = file_get_contents('php://input');
$obj = json_decode($json, true);


$config_number_checks = 10;
$protected_hashkey = $_GET['data_hashkey'];
$protected_user = anti_injection($_GET['user_id']);
$protected_company = anti_injection($_GET['company_id']);

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_user = anti_injection($obj['user_id']);

if ($protected_user != null && $protected_company != null) {
  $sql_2 = $dbcon->query("SELECT * FROM cheeck_config WHERE 
    hashkey = '$protected_hashkey' AND 
    id_company = '$protected_company'"
  );

  if (mysqli_num_rows($sql_2) > 0) {
    $db_row_counter = $sql_2->fetch_array();
    $number_checks = $db_row_counter['number_checks'];

    $sql = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
      hashkey = '$protected_hashkey' AND 
      id_client = '$protected_user' AND 
      id_company = '$protected_company' AND 
      status = 1
      ORDER BY register, id ASC
      LIMIT $number_checks"
    );

    $i = 0;
    $json_data_return = array();

    while ($db_row = $sql->fetch_array()) {
      $tmp_register = explode(" ", $db_row['register']);
      $tmp_date = $tmp_register[0];
      $tmp_break = explode("-", $tmp_date);
      $date_new_format = $tmp_break[2] . "-" . $tmp_break[1];
      
      $i++;
      $json_data_return[] = array(
        'id' => $i,
        'data' => $date_new_format,
      );
    }

    if(mysqli_num_rows($sql) < $number_checks){
      $i2 = $number_checks - mysqli_num_rows($sql);
      $j = mysqli_num_rows($sql);
      for($i = 0; $i < $i2; $i++) {
        $j++;
        $json_data_return[] = array(
          'id' => $j,
          'data' => 0,
        );
      }
    }

    // $json_data_return[] = array(
    //   'ncheckin' => mysqli_num_rows($sql),
    // );

    array_push($json_data_return, ($number_checks - mysqli_num_rows($sql)));

    echo json_encode($json_data_return);
  }
  else {
    echo json_encode("result_empty");
  }
}
else {
  echo json_encode("error_data_empty");
}

?>
