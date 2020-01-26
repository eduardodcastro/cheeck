<?php
// If you are using Composer (recommended)
require 'sendgrid-php/vendor/autoload.php';

// If you are not using Composer
// require("path/to/sendgrid-php/sendgrid-php.php");
function sendEmail($send_user,$send_pass,$send_email)
{
$user_name = utf8_decode($send_user);
$user_pass = $send_pass;
$user_email = $send_email;

$content_html = '<html><head><title></title></head>
<body><table cellpadding="0" cellspacing="0" border="0" valign="top" width="100%" align="center" style="width: 100%; max-width: 480px;">
<tbody>
<tr>
<td valign="top" align="left" style="word-break: normal; border-collapse: collapse; font-family: \'Circular\',\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-size: 12px; line-height: 18px; color: #555555;"><center>
<div id="m_-1202282501836675570main">
<table class="m_-1202282501836675570header-root" width="100%" height="50" cellpadding="0" cellspacing="0" style="border: none; margin: 0px; border-collapse: collapse; padding: 0px; width: 100%; height: 50px;">
<tbody valign="middle" style="border: none; margin: 0px; padding: 0px;">
<tr height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;">
<td colspan="3" height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 37px;"></td>
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 37px;"><img class="m_-1202282501836675570logo CToWUd" src="https://marketing-image-production.s3.amazonaws.com/uploads/96d635ddd03dc2c393450dca7ffd40fb8f3a65d3a7fe6bebda2f67a6bad5db7a5d0f74c76d29bf5975186e9b1fda47938c3cd396f6fb2bdd60ac2a203cf58be2.png" width="423" height="284" style="border: none; padding: 0px; display: block; max-width: 100%; width: 191px; height: 37px; border-width: initial; margin: 0px auto 0px auto;" caption="false" /></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 37px;"></td>
</tr>
<tr height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;">
<td colspan="3" height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;"></td>
</tr>
</tbody>
</table>
<table class="m_-1202282501836675570title-subtitle-root" width="100%" cellpadding="0" cellspacing="0" style="border: none; margin: 0px; border-collapse: collapse; padding: 0px; width: 100%;">
<tbody valign="middle" style="border: none; margin: 0px; padding: 0px;">
<tr height="28" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 28px;">
<td colspan="3" height="28" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 28px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 128px;"></td>
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 128px;">
<h1 class="m_-1202282501836675570font m_-1202282501836675570title-subtitle-title" align="center" style="border: none; margin: 0px; padding: 0px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; color: #555555; font-size: 40px; font-weight: bold; line-height: 45px; letter-spacing: -0.04em; text-align: center;">Bem-vindo.</h1>
<h2 class="m_-1202282501836675570font m_-1202282501836675570title-subtitle-subtitle" align="center" style="border: none; margin: 0px; padding: 7px 0px 0px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: 200; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; color: #616467; font-size: 17px; line-height: 23px; text-align: center;">Oi %user_name%! Obrigado por fazer parte do CheckBeauty.</h2>
<h2 class="m_-1202282501836675570font m_-1202282501836675570title-subtitle-subtitle" align="center" style="border: none; margin: 0px; padding: 7px 0px 0px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: 200; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; color: #616467; font-size: 17px; line-height: 23px; text-align: center;">Fique atento nos seus dados de acesso.</h2>
</td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 128px;"></td>
</tr>
<tr height="16" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 16px;">
<td colspan="3" height="16" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 16px;"></td>
</tr>
</tbody>
</table>
<span style="text-align: left; color: #793880; font-weight: bold;"></span>
<table class="m_-1202282501836675570text-root" width="100%" cellpadding="0" cellspacing="0" style="border: none; margin: 0px; border-collapse: collapse; padding: 0px; width: 100%;">
<tbody valign="middle" style="border: none; margin: 0px; padding: 0px;">
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 144px;">
<table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0px; padding: 0px;">
<tbody>
<tr>
<td class="m_-1202282501836675570font m_-1202282501836675570text-paragraph" align="left" style="border: none; margin: 0px; padding: 0px 0px 5px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: 200; text-align: left; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; color: #616467; font-size: 14px; line-height: 20px;"><center style="border: none; margin: 0px; padding: 0px;"><span style="text-align: left;">Senha de administrador:&nbsp;</span><span style="text-align: left; color: #793880; font-weight: bold;">%cpf%</span></center><center style="border: none; margin: 0px; padding: 0px;"><span style="text-align: left; color: #793880; font-weight: bold;"></span></center></td>
</tr>
<tr>
<td class="m_-1202282501836675570font m_-1202282501836675570text-paragraph" align="left" style="border: none; margin: 0px; padding: 0px 0px 5px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; font-weight: 200; text-align: left; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; color: #616467; font-size: 14px; line-height: 20px;"><center style="border: none; margin: 0px; padding: 0px;"><span style="text-align: left;">Senha:&nbsp;</span><span style="text-align: left; color: #793880; font-weight: bold;">%user_pass%</span></center><center style="border: none; margin: 0px; padding: 0px;"><span style="text-align: left; color: #793880; font-weight: bold;"></span></center></td>
</tr>
</tbody>
</table>
<table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0px; padding: 0px;">
<tbody>
<tr style="height: 66px;">
<td class="m_-1202282501836675570font m_-1202282501836675570text-paragraph" align="left" style="border: none; margin: 0px; padding: 0px 0px 5px; font-family: Circular, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 200; text-align: left; text-decoration: none; color: #616467; font-size: 14px; line-height: 20px; height: 66px;"><br style="border: none; margin: 0px; padding: 0px;" /><center style="border: none; margin: 0px; padding: 0px;">Nunca forne&ccedil;a suas senhas para desconhecidos.</center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;">Para ganhar seus checks basta ir nos estabelecimentos credenciados e informar seu CPF para um colaborador.</center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;">Quer saber onde tem parceiros credenciados? Consulte o mapa no menu do seu aplicativo.</center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><br /><center style="border: none; margin: 0px; padding: 0px;">Sucesso!</center><br /><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"></center><center style="border: none; margin: 0px; padding: 0px;"><span style="color: #793880; font-weight: bold;">Equipe CheckBeauty</span></center></td>
</tr>
</tbody>
</table>
</td>
<td class="m_-1202282501836675570table-separator" width="6.25%" valign="middle" style="width: 6.25%; border: none; margin: 0px; padding: 0px; height: 144px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td colspan="3" class="m_-1202282501836675570text-padding" height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;"></td>
</tr>
</tbody>
</table>
<table class="m_-1202282501836675570footer-padding-root" width="100%" cellpadding="0" cellspacing="0" style="border: none; margin: 0px; border-collapse: collapse; padding: 0px; width: 100%;">
<tbody valign="middle" style="border: none; margin: 0px; padding: 0px;">
<tr class="m_-1202282501836675570footer-padding" height="22" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 22px;">
<td colspan="3" class="m_-1202282501836675570footer-padding" height="22" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 22px;"></td>
</tr>
</tbody>
</table>
<table class="m_-1202282501836675570footer-root" width="100%" cellpadding="0" cellspacing="0" bgcolor="#F7F7F7" style="border: none; margin: 0px; border-collapse: collapse; padding: 0px; background-color: #f7f7f7; width: 100%;">
<tbody valign="middle" style="border: none; margin: 0px; padding: 0px;">
<tr class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;">
<td colspan="3" class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 23px;"></td>
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 23px;"><img class="m_-1202282501836675570footer-logo CToWUd" src="https://marketing-image-production.s3.amazonaws.com/uploads/4f2aa7489bd91fb1d9183bdbb022fdd7e0c2decbeb05b35386760768a4d868201581e8fc60aa05afb545e4eabd807700869379dc510a785294e7cab3ab6aa7ac.png" width="170" height="33" style="border: none; padding: 0px; display: block; max-width: 100%; width: 118px; height: 23px; border-width: initial; margin: 0px;" caption="false" /></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 23px;"></td>
</tr>
<tr class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;">
<td colspan="3" class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 18px;"><hr bgcolor="#D1D5D9" style="border: none; margin: 0px; padding: 0px; background-color: #d1d5d9; height: 1px;" /></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
</tr>
<tr class="m_-1202282501836675570footer-top-padding" height="12" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 12px;">
<td colspan="3" class="m_-1202282501836675570footer-top-padding" height="12" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 12px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
<td class="m_-1202282501836675570font" valign="middle" align="left" style="border: none; margin: 0px; padding: 0px; font-family: Circular, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 200; text-align: left; text-decoration: none; color: #88898c; font-size: 11px; line-height: 1.65em; height: 18px;">Baixe o CheckBeauty&nbsp;para: &nbsp; <a class="m_-1202282501836675570footer-separated-text" href="http://wl.spotify.com/wf/click?upn=BlbTtHuOh2TFmWkilWQZgvtCflLEyHGh9-2BbwE6-2BPVxl08pD20U1kr-2Fjrk73BLHR3XLOceffm5WlyUuY4CKt-2FAg-3D-3D_EyAA0-2F1k6-2FWoQ9W3gycQ593ZTzn3LAAfZc9lLuYn6ROod19g5ncVQjJ5GjsEOGAr5xs0swps0D9P15-2BRUFS-2F3pY5XRh6cjwZErNAEMWgzCdtjVBVfada26cKCc2iiQ53jf5IEwvBe9FuuHSOneQ4ET0gVWdhtosY8B7OaaPhDq2TTlQqM9LiR6-2B3DWLlP6OxQMb0XgoYXMTHN0t5ivOf2zHJ8C12MsuW-2F4A1pp2Q7A-2BDpPQPt5IVllsddRuuMGn9j1CwLBPjUVdquroe1PTaXO6wk0J2UIVxGs24d83Eg8surTbk5A74alz2haVy97olIyrvavBBqLz0AXYFOIlc9P-2FPLNMKOZV2UuUmC4UlxyI-3D" style="border-top: none; border-bottom: none; margin: 0px; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; border-right: 1px solid #c3c3c3; display: inline-block; padding: 0px 7px 0px 0px; border-left: none; color: #6d6d6d; font-weight: bold;" target="_blank" data-saferedirecturl="#" rel="noopener">iPhone</a><a class="m_-1202282501836675570footer-separated-text" href="#" style="border-top: none; border-bottom: none; margin: 0px; text-decoration-line: none; text-decoration-style: initial; text-decoration-color: initial; border-right: 1px solid #c3c3c3; border-left: 1px solid transparent; display: inline-block; padding: 0px 7px; color: #6d6d6d; font-weight: bold;" target="_blank" data-saferedirecturl="#" rel="noopener">Android</a></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
</tr>
<tr class="m_-1202282501836675570footer-top-padding" height="12" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 12px;">
<td colspan="3" class="m_-1202282501836675570footer-top-padding" height="12" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 12px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
<td valign="middle" style="border: none; margin: 0px; padding: 0px; height: 18px;"><hr bgcolor="#D1D5D9" style="border: none; margin: 0px; padding: 0px; background-color: #d1d5d9; height: 1px;" /></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
</tr>
<tr class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;">
<td colspan="3" class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 36px;"></td>
<td class="m_-1202282501836675570font" valign="middle" align="left" style="border: none; margin: 0px; padding: 0px; font-family: Circular, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 200; text-align: left; text-decoration: none; color: #88898c; font-size: 11px; line-height: 1.65em; height: 36px;">Esta mensagem foi enviada para %user_email%. Se tiver d&uacute;vidas ou reclama&ccedil;&otilde;es, <a class="m_-1202282501836675570footer-link" href="#" style="border: none; margin: 0px; padding: 0px; font-family: Circular,\'Helvetica Neue\',Helvetica,Arial,sans-serif; text-align: left; color: #6d6d6d; text-decoration: none; font-weight: bold;" align="left" target="_blank" data-saferedirecturl="#" rel="noopener">fale conosco</a>.</td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 36px;"></td>
</tr>
<tr class="m_-1202282501836675570footer-middle-padding" height="33" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 33px;">
<td colspan="3" class="m_-1202282501836675570footer-middle-padding" height="33" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 33px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
<td class="m_-1202282501836675570font m_-1202282501836675570font-small" valign="middle" align="left" style="border: none; margin: 0px; padding: 0px; font-family: Circular, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 200; text-align: left; text-decoration: none; color: #88898c; line-height: 1.65em; font-size: 11px; height: 18px;"></td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
</tr>
<tr valign="middle" style="border: none; margin: 0px; padding: 0px;">
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
<td class="m_-1202282501836675570font m_-1202282501836675570font-small" valign="middle" align="left" style="border: none; margin: 0px; padding: 0px; font-family: Circular, \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-weight: 200; text-align: left; text-decoration: none; color: #88898c; line-height: 1.65em; font-size: 11px; height: 18px;">CheckBeauty&nbsp; - Rua Joaquim Floriano 397 - 2&ordm; andar - Itaim Bibi - SP</td>
<td width="6.25%" valign="middle" style="border: none; margin: 0px; padding: 0px; width: 6.25%; height: 18px;"></td>
</tr>
<tr height="20" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 20px;">
<td colspan="3" class="m_-1202282501836675570footer-bottom-padding" height="25" valign="middle" style="border: none; margin: 0px; padding: 0px; height: 25px;"></td>
</tr>
</tbody>
</table>
</div>
</center></td>
</tr>
</tbody>
</table></body></html>';

$from = new SendGrid\Email("Cheeck", "contato@cheeck.com.br");
$subject = "Cheeck - Seja bem-vindo.";
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
echo $response->statusCode();
// print_r($response->headers());
// echo $response->body();
}
?>
