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
$protected_properties = anti_injection($_GET['user_properties']);


if ($protected_properties != null) {
  $sql = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
    hashkey = '$protected_hashkey' AND 
    id_company = '$protected_properties'
    ORDER BY register DESC"
  );

  if (mysqli_num_rows($sql) > 0) {
    $i = 0;
    $json_data_return = array();

    while ($db_row = $sql->fetch_array()) {
      $id_user = $db_row['id_client'];
      
      $tmp_register = explode(" ", $db_row['register']);
      $tmp_date = $tmp_register[0];
      $tmp_break = explode("-", $tmp_date);
      $date_new_format = $tmp_break[2] . "-" . $tmp_break[1] . "-" . $tmp_break[0] . " às " . $tmp_register[1];

      $sql_2 = $dbcon->query("SELECT * FROM cheeck_signature WHERE id = '$id_user'");
      $db_row_2 = $sql_2->fetch_array();
      $user_id = $db_row_2['id'];
      $user_name = $db_row_2['name'];
      $user_email = $db_row_2['email'];

      $i++;

      // echo $i . "-" . $company_id . "-" . utf8_decode($company_name) . "-" . $company_address . "-" . $photo_return['file'];

      $json_data_return[] = array(
        'id' => $i,
        'user_id' => $user_id,
        'user_name' => utf8_decode($user_name),
        'user_email' => utf8_decode($user_email),
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
