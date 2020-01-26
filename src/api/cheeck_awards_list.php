<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';

// variables :: 
// id
// hashkey 
// register 
// client
// company
// address
// city
// country

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$protected_hashkey = 'K_@cjg2w*n9C$$2${J~s';
$protected_user = anti_injection($_GET['user_id']);


if ($protected_user != null) {
  $sql = $dbcon->query("SELECT * FROM cheeck_awards WHERE 
    hashkey = '$protected_hashkey' AND 
    id_client = '$protected_user'
    GROUP BY id_company"
  );

  if (mysqli_num_rows($sql) > 0) {
    $i = 0;
    $json_data_return = array();

    while ($db_row = $sql->fetch_array()) {
      $id_company = $db_row['id_company'];
      
      $tmp_register = explode(" ", $db_row['register']);
      $tmp_date = $tmp_register[0];
      $tmp_break = explode("-", $tmp_date);
      $date_new_format = $tmp_break[2] . "-" . $tmp_break[1] . "-" . $tmp_break[0] . " às " . $tmp_register[1];

      $sql_2 = $dbcon->query("SELECT * FROM cheeck_properties WHERE id = '$id_company'");
      $db_row_2 = $sql_2->fetch_array();
      $company_id = $db_row_2['id'];
      $company_name = $db_row_2['company'];
      $company_address = $db_row_2['address'];
      $company_city = $db_row_2['city'];
      $company_country = $db_row_2['country'];
      $company_latitude = $db_row_2['latitude'];
      $company_longitude = $db_row_2['longitude'];

      $i++;

      // echo $i . "-" . $company_id . "-" . utf8_decode($company_name) . "-" . $company_address . "-" . $photo_return['file'];

      $json_data_return[] = array(
        'id' => $i,
        'company_id' => $company_id,
        'company_name' => utf8_decode($company_name),
        'company_address' => utf8_decode($company_address),
        'company_city' => utf8_decode($company_city),
        'company_country' => utf8_decode($company_country),
        'company_latitude' => $company_latitude,
        'company_longitude' => $company_longitude,
        'register_date' => $date_new_format,
      );
    }
    echo json_encode($json_data_return);
  }
  else {
    echo json_encode("result_empty");
  }
}

?>
