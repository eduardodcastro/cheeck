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

function randomString()
{
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randstring = '';
    for ($i = 0; $i < 11; $i++) {
        $randstring .= $characters[rand(0, strlen($characters))];
    }
    return $randstring;
}

$json = file_get_contents('php://input');
$obj = json_decode($json, true);


$config_number_checks = 10;
$protected_hashkey = 'K_@cjg2w*n9C$$2${J~s';
$protected_user = anti_injection($_GET['user_id']);
$protected_company = anti_injection($_GET['company_id']);
$protected_codedown = anti_injection($_GET['code_down']);

// $protected_hashkey = anti_injection($obj['data_hashkey']);
// $protected_user = anti_injection($obj['user_id']);

$json_data_return = array();

if ($protected_user != null && $protected_codedown != null) {

    $sql = $dbcon->query("SELECT * FROM cheeck_properties WHERE 
    down_code = '$protected_codedown' AND
    id = '$protected_company'
    "
  );

  if (mysqli_num_rows($sql) > 0) {
    $db_row = $sql->fetch_array();
    $company_id = $db_row['id'];

    $sql_2 = $dbcon->query("SELECT * FROM cheeck_config WHERE 
    hashkey = '$protected_hashkey' AND 
    id_company = '$company_id'"
  );

    if (mysqli_num_rows($sql_2) > 0) {
        $db_row_counter = $sql_2->fetch_array();
        $number_checks = $db_row_counter['number_checks'];

        if (mysqli_num_rows($sql) == 1) {
            $sql_3 = $dbcon->query("SELECT * FROM cheeck_checkin WHERE 
                hashkey = '$protected_hashkey' AND 
                id_client = '$protected_user' AND 
                id_company = '$company_id' AND 
                status = 1
                ORDER BY register, id ASC
                LIMIT $number_checks"
            );

            if(mysqli_num_rows($sql_3) == $number_checks){
                $count = 1;
                $id_concatenation = '';
                while($data_update = $sql_3->fetch_array()){
                    $data_id = $data_update['id'];
                    // echo $data_id; die();
                    $dbcon->query("UPDATE cheeck_checkin SET status = 2 WHERE 
                        id_client = '$protected_user' AND 
                        id_company = '$company_id' AND 
                        status = 1 AND 
                        id = '$data_id'"
                    );
                    $count++;
                }

                $code_awards = randomString();
                // echo $code_awards;
                // $json_data_return = array();

                if($dbcon->query("INSERT INTO cheeck_awards(id_client, id_company, awards_code) VALUES('$protected_user','$company_id','$code_awards')")) {

                    // recupera o último insert no banco 
                    $id_awards = $dbcon->insert_id;

                    $sql_4 = $dbcon->query("SELECT * FROM cheeck_awards WHERE id = '$id_awards'");

                    if (mysqli_num_rows($sql_4) > 0) {
                        $db_row = $sql_4->fetch_array();

                        $tmp_register = explode(" ", $db_row['register']);
                        $tmp_date = $tmp_register[0];
                        $tmp_break = explode("-", $tmp_date);
                        $date_new_format = $tmp_break[2] . "-" . $tmp_break[1] . "-" . $tmp_break[0];

                        $hour_tmp = $tmp_register[1];
                        $awards_code = $db_row['awards_code'];

                        $json_data_return[] = array(
                            'date' => $date_new_format,
                            'hour' => $hour_tmp,
                            'code' => $awards_code,
                            'message' => 'success_awards_insert',
                        );

                        echo json_encode($json_data_return);
                    }
                }
            }
        }
        else {
            $json_data_return[] = array(
                'message' => 'error_code_down',
            );
            echo json_encode($json_data_return);
        }
    }
    else {
        $json_data_return[] = array(
            'message' => 'error_config',
        );
        echo json_encode($json_data_return);
    }
  }
  else {
    $json_data_return[] = array(
        'message' => 'error_properties',
    );
    echo json_encode($json_data_return);
  }
}
else {
    $json_data_return[] = array(
        'message' => 'error_data_empty',
    );
    echo json_encode($json_data_return);
}

?>
