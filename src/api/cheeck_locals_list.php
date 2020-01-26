<?php
include_once 'cheeck_db.php';
include_once 'cheeck_functions.php';
include_once 'cheeck_distance_between_two_points.php';

// variables :: 
// id
// hashkey 
// company 
// address
// phone_number
// latitude 
// longitude
// photo

function orderBy($data, $field)
{
    $code = "return strnatcmp(\$a['$field'], \$b['$field']);";
    usort($data, create_function('$a,$b', $code));
    return array_slice($data, 0, 10);
}

// function formatDistance($value)
// {
//     $value_tmp = number_format((round($value, 3) * 1000),2, ',', '.');
//     $value_format = substr($value_tmp, 0, -3);
//     return $value_format;
// }

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$protected_hashkey = 'K_@cjg2w*n9C$$2${J~s';
$user_latitude = $_GET['data_userlatitude'];
$user_longitude = $_GET['data_userlongitude'];

if ($user_latitude === '' && $user_longitude === '') {
    $user_latitude = '-19.9319811';
    $user_longitude = '-43.9401906';
}


$sql = $dbcon->query("SELECT * FROM cheeck_properties WHERE 
    hashkey = '$protected_hashkey'
    ORDER BY id"
);

if (mysqli_num_rows($sql) > 0) {
    $i = 0;
    $json_data_return = array();

    while ($db_row = $sql->fetch_array()) {
        $id_company = $db_row['id_company'];

        $distance_local = distance($user_latitude, $user_longitude, $db_row['latitude'], $db_row['longitude'], "K");

        $sql_2 = $dbcon->query("SELECT * FROM cheeck_photos_company WHERE id_company = '$id_company'");
        $db_row_2 = $sql_2->fetch_array();
        $company_photo = $db_row_2['file'];

        $i++;

        $json_data_return[] = array(
            'id' => $i,
            'company_id' => $db_row['id_company'],
            'company_name' => utf8_decode($db_row['company']),
            'company_address' => utf8_decode($db_row['address']),
            'company_phone' => utf8_decode($db_row['phone_number']),
            'distance' => (round($distance_local, 3) * 1000),
            // 'distance' => $distance_local,
            'latitude' => $db_row['latitude'],
            'longitude' => $db_row['longitude'],
            'photo' => $company_photo,
        );
    }

    $sorted_data = orderBy($json_data_return, 'distance');

    // echo json_encode($json_data_return);
    echo json_encode($sorted_data);
}
else {
    echo json_encode("result_empty");
}

?>
