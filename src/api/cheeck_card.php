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


$protected_hashkey = $_GET['data_hashkey'];
$protected_user = anti_injection($_GET['user_id']);

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_user = anti_injection($obj['user_id']);

if ($protected_user != null) {
  $sql = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
    hashkey = '$protected_hashkey' AND 
    id_client = '$protected_user' AND 
    status = 1
    GROUP BY id_company"
  );

  if (mysqli_num_rows($sql) > 0) {
    $i = 0;
    $json_data_return = array();

    while ($db_row = $sql->fetch_array()) {
      $id_company = $db_row['id_company'];

      // echo $id_company;

      $sql_2 = $dbcon->query("SELECT * FROM cheeck_properties WHERE id = '$id_company'");
      $db_row_2 = $sql_2->fetch_array();
      $company_id = $db_row_2['id'];
      $company_name = $db_row_2['company'];
      $company_address = $db_row_2['address'];

      $sql_3 = $dbcon->query("SELECT * FROM cheeck_photos_company WHERE id_company = $id_company");
      $photo_return = $sql_3->fetch_array();

      $i++;

      // echo $i . "-" . $company_id . "-" . utf8_decode($company_name) . "-" . $company_address . "-" . $photo_return['file'];

      $json_data_return[] = array(
        'id' => $i,
        'company_id' => $company_id,
        'company_name' => utf8_decode($company_name),
        'company_address' => utf8_decode($company_address),
        'photo' => $photo_return['file'],
      );
    }
    echo json_encode($json_data_return);
  }
  else {
    echo json_encode("result_empty");
  }
}

?>
