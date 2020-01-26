<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';
include_once 'cheeck_distance_between_two_points.php';

// variables :: 
// idQrcode * me retorna o identificador do restaurante *
// idUser
// userLatitude
// userLongitude


$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$protected_hashkey = 'K_@cjg2w*n9C$$2${J~s';
$protected_user = anti_injection($_GET['user_id']);
$protected_qrcode = anti_injection($_GET['qrcode_id']);
$user_latitude = $_GET['data_userlatitude'];
$user_longitude = $_GET['data_userlongitude'];

// $protected_user = 1;
// $protected_qrcode = 'abcdef';
// $user_latitude = '-19.847180';
// $user_longitude = '-44.020653';


if ($protected_user != null && $protected_qrcode != null) {
  $sql = $dbcon->query("SELECT * FROM cheeck_properties WHERE 
    hashkey = '$protected_hashkey' AND
    hashqrcode = '$protected_qrcode'"
  );

  if (mysqli_num_rows($sql) > 0) {

    $db_row = $sql->fetch_array();
    $company_id = $db_row['id'];

    $sql_2 = $dbcon->query("SELECT * FROM cheeck_config WHERE 
      id_company = '$company_id'"
    );

    $db_row_counter = $sql_2->fetch_array();
    $number_checks = $db_row_counter['number_checks'];

    $sql_3 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE
      id_client = '$protected_user' AND
      id_company = '$company_id' AND
      status = 1
      ORDER BY register, id ASC
      LIMIT $number_checks"
    );

    if (mysqli_num_rows($sql_3) < $number_checks) {

      $distance_local = distance($user_latitude, $user_longitude, $db_row['latitude'], $db_row['longitude'], "K");
      // echo json_encode(round($distance_local, 3));

      if ($distance_local <= 0.050) {
        if($dbcon->query("INSERT INTO cheeck_checkin(id_client, id_company) VALUES('$protected_user','$company_id')")) {
          echo json_encode("success_checkin_insert");
        }
      } else {
        echo json_encode("error_distance");
      }

    } else {
      echo json_encode("error_full_card");
    }

  } else {
    echo json_encode("error_qrcode");
  }

} else {
    echo json_encode("error_empty");
  }
?>
