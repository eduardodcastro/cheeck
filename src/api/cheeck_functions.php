<?php

function anti_injection($string_sql)
{
    // remove palavras que contenham sintaxe sql
    $string_sql = preg_replace("/(from|select|insert|delete|where|drop table|show tables|#|\*|--|\\\\)/","",$string_sql);
    $string_sql = trim($string_sql);//limpa espa�os vazio
    $string_sql = strip_tags($string_sql);//tira tags html e php
    $string_sql = addslashes($string_sql);//Adiciona barras invertidas a uma string
    return $string_sql;
}

function validate_email($string_email)
{
	// Remove all illegal characters from email
	$string_email = filter_var($string_email, FILTER_SANITIZE_EMAIL);

	// Validate e-mail
	if (filter_var($string_email, FILTER_VALIDATE_EMAIL)) {
	    return true;
	} else {
	    return false;
	}
}

function inverterData($data, $separador1, $separador2)
{
  $dia_mes_ano = explode($separador1,$data);
  return $dia_mes_ano[2].$separador2.$dia_mes_ano[1].$separador2.$dia_mes_ano[0];
}

function humanizeUrl($string)
{
	$str = preg_replace('~&([a-z]{1,2})(acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', htmlentities($string, ENT_QUOTES, 'UTF-8'));
	$str = str_replace(' ', '-', strtolower(trim($str)));
	return $str;
}

function validateCpf($cpf)
{
	$cpf = str_replace(array('.','-'), '', $cpf);

	if($cpf == "00000000000" || $cpf == "11111111111" || $cpf == "22222222222" || $cpf == "33333333333" || $cpf == "44444444444" || $cpf == "55555555555" || $cpf == "66666666666" || $cpf == "77777777777" || $cpf == "88888888888" || $cpf == "99999999999"):
		return false;
	else:
		for ($t = 9; $t < 11; $t++):
			for ($d = 0, $c = 0; $c < $t; $c++) $d += $cpf{$c} * (($t + 1) - $c);

				$d = ((10 * $d) % 11) % 10;

				if ($cpf{$c} != $d)
					return false;
		endfor;

		return true;
	endif;
}

function validateCNPJ($cnpj) {
  // Deixa o CNPJ com apenas números
  $cnpj = preg_replace( '/[^0-9]/', '', $cnpj );

  // Garante que o CNPJ é uma string
  $cnpj = (string)$cnpj;

  // O valor original
  $cnpj_original = $cnpj;

  // Captura os primeiros 12 números do CNPJ
  $primeiros_numeros_cnpj = substr( $cnpj, 0, 12 );

  /**
   * Multiplicação do CNPJ
   *
   * @param string $cnpj Os digitos do CNPJ
   * @param int $posicoes A posição que vai iniciar a regressão
   * @return int O
   *
   */
  if ( ! function_exists('multiplica_cnpj') ) {
      function multiplica_cnpj( $cnpj, $posicao = 5 ) {
          // Variável para o cálculo
          $calculo = 0;

          // Laço para percorrer os item do cnpj
          for ( $i = 0; $i < strlen( $cnpj ); $i++ ) {
              // Cálculo mais posição do CNPJ * a posição
              $calculo = $calculo + ( $cnpj[$i] * $posicao );

              // Decrementa a posição a cada volta do laço
              $posicao--;

              // Se a posição for menor que 2, ela se torna 9
              if ( $posicao < 2 ) {
                  $posicao = 9;
              }
          }
          // Retorna o cálculo
          return $calculo;
      }
  }

  // Faz o primeiro cálculo
  $primeiro_calculo = multiplica_cnpj( $primeiros_numeros_cnpj );

  // Se o resto da divisão entre o primeiro cálculo e 11 for menor que 2, o primeiro
  // Dígito é zero (0), caso contrário é 11 - o resto da divisão entre o cálculo e 11
  $primeiro_digito = ( $primeiro_calculo % 11 ) < 2 ? 0 :  11 - ( $primeiro_calculo % 11 );

  // Concatena o primeiro dígito nos 12 primeiros números do CNPJ
  // Agora temos 13 números aqui
  $primeiros_numeros_cnpj .= $primeiro_digito;

  // O segundo cálculo é a mesma coisa do primeiro, porém, começa na posição 6
  $segundo_calculo = multiplica_cnpj( $primeiros_numeros_cnpj, 6 );
  $segundo_digito = ( $segundo_calculo % 11 ) < 2 ? 0 :  11 - ( $segundo_calculo % 11 );

  // Concatena o segundo dígito ao CNPJ
  $cnpj = $primeiros_numeros_cnpj . $segundo_digito;

  // Verifica se o CNPJ gerado é idêntico ao enviado
  if ( $cnpj === $cnpj_original ) {
      return true;
  }
}

function generateRandomString($length = 5) {
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return '1' . $randomString;
}

function getLatLong($address){
  if(!empty($address)){
      //Formatted address
      $formattedAddr = str_replace(' ','+',$address);
      //Send request and receive json data by address
      $geocodeFromAddr = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?address='.$formattedAddr.'&sensor=false');
      $output = json_decode($geocodeFromAddr);
      //Get latitude and longitute from json data
      $data['latitude']  = $output->results[0]->geometry->location->lat;
      $data['longitude'] = $output->results[0]->geometry->location->lng;
      //Return latitude and longitude of the given address
      if(!empty($data)){
          return $data;
      }else{
          return false;
      }
  }else{
      return false;
  }
}
?>
