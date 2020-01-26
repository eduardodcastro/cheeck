<?php
// If you are using Composer (recommended)
require 'sendgrid-php/vendor/autoload.php';

// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");
function sendEmail($send_user,$send_pass,$send_email)
{
$user_name = utf8_decode($send_user);
$user_pass = base64_decode($send_pass);
$user_email = $send_email;

$content_html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head><META http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><p> </p>
<p> </p>

<p></p>

<p></p>

<p></p>

<p></p>

<table style="table-layout:fixed;vertical-align:top;min-width:320px;margin:0 auto;border-spacing:0;border-collapse:collapse;background-color:#f1f3f3;width:100%" width="100%" cellspacing="0" cellpadding="0" bgcolor="#F1F3F3">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;border-collapse:collapse" valign="top">
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:transparent">
<div style="border-collapse:collapse;display:table;width:100%;background-color:transparent"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="width:100%!important">
<div style="border:0px solid transparent;padding:5px 0px 5px 0px">
<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse;min-width:100%" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;min-width:100%;border-collapse:collapse;padding:10px" valign="top">
<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse;width:100%;border-top:0px solid transparent;height:15px" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;border-collapse:collapse" valign="top" height="15"> </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="background-color:#ffffff;width:100%!important">
<div style="border-top:0px solid transparent;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:50px 50px 5px 50px"> 
<div style="color:#cfcfcf;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;line-height:120%;padding:10px">
<div style="font-size:12px;line-height:14px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#cfcfcf">
<p style="font-size:14px;line-height:16px;text-align:left;margin:0"><strong>Oi, %user_name%</strong></p>
</div>
</div>

<div>
<div style="color:#ff6c41;font-family:&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;line-height:120%;padding:10px">
<div style="font-size:12px;line-height:14px;font-family:&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;color:#ff6c41">
<p style="font-size:14px;line-height:60px;margin:0"><span style="font-size:42px">Parece que esqueceu a sua senha.</span></p>
</div>
</div>
</div>

<div style="display:none;max-height:0px;overflow:hidden">
<div style="color:#ff6c41;font-family:&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;line-height:120%;padding:10px">
<div style="line-height:14px;font-family:&#39;Helvetica Neue&#39;,Helvetica,Arial,sans-serif;font-size:12px;color:#ff6c41">
<p style="line-height:28px;text-align:left;font-size:12px;margin:0"><span style="font-size:24px">Estamos enviando novamente para que não esqueça.</span></p>
</div>
</div>
</div>
 </div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="background-color:#ffffff;width:100%!important">
<div style="border-top:0px solid transparent;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:25px 0px 0px 0px">
<div style="padding-right:0px;padding-left:0px" align="center">
<div style="font-size:1px;line-height:10px"> </div>
<img style="outline:none;text-decoration:none;clear:both;border:0;height:auto;float:none;width:100%;max-width:634px;display:block" title="Image" src="https://marketing-image-production.s3.amazonaws.com/uploads/e19d3ec68d1c16a2dafaf05afefda0db211006871b384a1e0f1e2459a5141e0639d2f8012ffd373dfb89145c6b8291b0e92d43c6388838f9a0f4d145358f01e3.png" alt="Image" width="634" align="center" border="0"> </div>
</div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="background-color:#ffffff;width:100%!important">
<div style="border-top:0px solid transparent;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:35px 50px 5px 50px"> 
<div style="color:#555555;font-family:&#39;Roboto&#39;,Tahoma,Verdana,Segoe,sans-serif;line-height:150%;padding:15px 10px 10px 10px">
<div style="font-size:12px;line-height:18px;font-family:&#39;Roboto&#39;,Tahoma,Verdana,Segoe,sans-serif;color:#555555">
<p style="font-size:14px;line-height:25px;text-align:left;margin:0"><span style="font-size:17px">Fique atento nos seus dados de acesso.</span><br><span style="font-size:17px;line-height:25px">E-mail: <strong><span style="color:#f74a4a;font-size:17px;line-height:25px"><a href="mailto:%user_email%" target="_blank">%user_email%</a></span></strong></span><br> <span style="font-size:17px;line-height:25px">Senha: <span style="color:#f74a4a;font-size:17px;line-height:25px"><strong>%user_pass%</strong></span></span> <br> <br> <span style="font-size:17px;line-height:25px">Nunca forneça suas senhas para desconhecidos.</span><span style="font-size:17px"><br><br>Qualquer dúvida, crítica ou sugestão, envie um email para <strong><a href="mailto:contato@cheeck.com.br" target="_blank">contato@cheeck.com.br</a></strong>.<br><br><span style="font-size:17px;line-height:25px">Obrigado!</span></span></p>
</div>
</div>
 </div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="width:100%!important">
<div style="border-top:0px solid transparent;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:0px 0px 45px 0px">
<div style="padding-right:0px;padding-left:50px" align="left"><img style="outline:none;text-decoration:none;clear:both;border:0;height:auto;float:none;width:100%;max-width:348px;display:block" title="Image" src="https://marketing-image-production.s3.amazonaws.com/uploads/286f32d4b4ce9abc20d2e2e8c09a3abed8b360c4deb9e402f923ad675537a6286f0e569f31e4085b0da27c13d195b91dfa0c41061c8218d2124b7c4105610a35.gif" alt="Image" width="348" border="0"> </div>
</div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="width:100%!important">
<div style="border-top:2px solid #ff6c41;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:30px 0px 25px 0px">
<div style="padding-right:0px;padding-left:0px" align="center"><img style="outline:none;text-decoration:none;clear:both;border:0;height:auto;float:none;width:100%;max-width:158px;display:block" title="Image" src="https://marketing-image-production.s3.amazonaws.com/uploads/7e383579d506db72b41c7e7bfeca915479b41880392379795761937088025ec032ce168ef99808892e64d30b5797707979061af9dc5eaf741bcb37a8abcaeb2e.png" alt="Image" width="158" align="center" border="0"> </div>

<div style="color:#353535;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;line-height:120%;padding:10px 10px 0px 10px">
<div style="font-size:12px;line-height:14px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#353535">
<p style="font-size:14px;line-height:16px;text-align:center;margin:0"><strong>COMPARTILHE</strong></p>
</div>
</div>

<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;border-collapse:collapse;padding:5px 10px 10px 10px" valign="top">
<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:undefined" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr style="vertical-align:top;display:inline-block;text-align:center" align="center" valign="top">
<td style="word-break:break-word;vertical-align:top;padding-bottom:5px;padding-right:5px;padding-left:5px;border-collapse:collapse" valign="top"><a href="https://www.facebook.com/aplicativocheeck/" rel="noopener" target="_blank"><img style="outline:none;text-decoration:none;clear:both;height:auto;float:none;border:none;display:block" title="Facebook" src="https://marketing-image-production.s3.amazonaws.com/uploads/56150f32ef072bfc9e82625aa5e8052f96707302fbca28b95b7fa14fcd7d8e4fde4244f6cd3d649eab487957a81ac80dd2595651c886f4e50258169cd0f838c5.png" alt="Facebook" width="32" height="32"></a></td>
<td style="word-break:break-word;vertical-align:top;padding-bottom:5px;padding-right:5px;padding-left:5px;border-collapse:collapse" valign="top"><a href="https://www.instagram.com/cheeckbr/" rel="noopener" target="_blank"><img style="outline:none;text-decoration:none;clear:both;height:auto;float:none;border:none;display:block" title="Instagram" src="https://marketing-image-production.s3.amazonaws.com/uploads/7bfb897964dab840c74c6ec3bc5c1d9af6ece911131bc12d0de0080986cdc68cdc162878d83519e94d255b8c4d4a1008293a699cb84b8fccede81cead55042f0.png" alt="Instagram" width="32" height="32"></a></td>
<td style="word-break:break-word;vertical-align:top;padding-bottom:5px;padding-right:5px;padding-left:5px;border-collapse:collapse" valign="top"><a href="https://www.linkedin.com/company/35624220/" rel="noopener" target="_blank"><img style="outline:none;text-decoration:none;clear:both;height:auto;float:none;border:none;display:block" title="LinkedIn" src="https://marketing-image-production.s3.amazonaws.com/uploads/8b5093cd43be08f690ff2c8f6f6d70bb70c9df434c2c74f7068ffe00c0e769205c1d6c7b9053f1000ec0023656ad9b9752f2b4a9492511af7381e98c86969c3b.png" alt="LinkedIn" width="32" height="32"></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:#ffffff">
<div style="border-collapse:collapse;display:table;width:100%;background-color:#ffffff"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="background-color:#ffffff;width:100%!important">
<div style="border-top:0px solid transparent;border-left:8px solid #f1f3f3;border-bottom:0px solid transparent;border-right:8px solid #f1f3f3;padding:30px 50px 30px 50px"> 
<div style="color:#555555;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;line-height:120%;padding:10px">
<div style="font-size:12px;line-height:14px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#555555">
<p style="font-size:14px;line-height:16px;text-align:left;margin:0">FALE CONOSCO / <strong><a style="text-decoration:underline;color:#dc6b5c" href="http://www.example.com/" rel="noopener" target="_blank">contato@cheeck.com.br</a></strong></p>
</div>
</div>
 </div>
</div>
</div>
 </div>
</div>
</div>
<div style="background-color:transparent">
<div style="margin:0 auto;min-width:320px;max-width:650px;word-wrap:break-word;word-break:break-word;background-color:transparent">
<div style="border-collapse:collapse;display:table;width:100%;background-color:transparent"> 
<div style="min-width:320px;max-width:650px;display:table-cell;vertical-align:top">
<div style="width:100%!important">
<div style="border:0px solid transparent;padding:5px 0px 5px 0px">
<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse;min-width:100%" border="0" width="100%" cellspacing="0" cellpadding="0">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;min-width:100%;border-collapse:collapse;padding:10px" valign="top">
<table style="table-layout:fixed;vertical-align:top;border-spacing:0;border-collapse:collapse;width:100%;border-top:0px solid transparent;height:15px" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top;border-collapse:collapse" valign="top" height="15"> </td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
 </div>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</body></html>';

$from = new SendGrid\Email("Cheeck", "contato@cheeck.com.br");
$subject = "Cheeck - Recuperar a senha.";
$to = new SendGrid\Email($user_name, $user_email);
$content = new SendGrid\Content("text/html", $content_html);

// Send message as html
// $content = new SendGrid\Content("text/html", "<h1>Sending with SendGrid is Fun and easy to do anywhere, even with PHP</h1>");

$mail = new SendGrid\Mail($from, $subject, $to, $content);

// $mail->personalization[0]->addSubstitution("%cpf%", $user_cpf);
$mail->personalization[0]->addSubstitution("%user_name%", $user_name);
$mail->personalization[0]->addSubstitution("%user_pass%", $user_pass);
$mail->personalization[0]->addSubstitution("%user_email%", $user_email);

// $apiKey = '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';
$apiKey = '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';
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
// echo $response->statusCode();
// print_r($response->headers());
// echo $response->body();
}
?>
