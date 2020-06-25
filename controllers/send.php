<?php
// aqui metemos los datos en mysql
include '../credentials/db.php';
$servername = $credentials_servername;
$database   = $credentials_dbname;
$username   = $credentials_username;
$password   = $credentials_password;


// Create connection

$conn = mysqli_connect($servername, $username, $password,$database);
mysqli_set_charset($conn, 'utf8');
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// aqui cogemos las variables limpiando los parametros
$msgMensaje =  htmlentities($_POST['Information']);
$msgNombre = htmlentities ($_POST['FirstName']);
$msgCorreo =  htmlentities($_POST['Email']);
$msgTelefono = htmlentities($_POST['Phone']);

// ahora hacemos las variables seguras
$mensajeSeguro = mysqli_real_escape_string($conn,$msgMensaje);
$nombreSeguro = mysqli_real_escape_string($conn,$msgNombre);
$correoSeguro = mysqli_real_escape_string($conn,$msgCorreo);
$telefonoSeguro = mysqli_real_escape_string($conn,$msgTelefono);


//echo "Connected successfully";
$sql = "INSERT INTO  wp_contacto_tampico34 (date, fullname, email, phone, message) VALUES (now(),'$nombreSeguro', '$correoSeguro', '$telefonoSeguro','$mensajeSeguro')";
if (mysqli_query($conn, $sql)) {
    //echo "New record created successfully";
} else {
    //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
//echo "se realizo correctamente";

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\OAuth;

// Alias the League Google OAuth2 provider class
use League\OAuth2\Client\Provider\Google;

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');


//Load dependencies from composer
//If this causes an error, run 'composer install'
require '../vendor/autoload.php'; // REVISAR URL SEGUN MI INSTALACION ------------------------------------- OJO - OJO - OJO

//Create a new PHPMailer instance
//Passing `true` enables PHPMailer exceptions
//$mail = new PHPMailer(true);
$mail = new PHPMailer;


//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// SMTP::DEBUG_OFF = off (for production use)
// SMTP::DEBUG_CLIENT = client messages
// SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_OFF;


// si sale un problema de conexión con smtp a la hora de enviar el correo incluir este código
$mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => true,
        'allow_self_signed' => true
    )
);


//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption mechanism to use - STARTTLS or SMTPS
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Set AuthType to use XOAUTH2
$mail->AuthType = 'XOAUTH2';


// NOTA IMPORTANTE
//Fill in authentication details here
//Either the gmail account owner, or the user that gave consent
// Aqui meto mis datos --------------------------------------------------------------------------------- OJO - OJO - OJO
require '../credentials/phpmailer.php';
$emailTo            = "nachomorenomontesinos@gmail.com";
$emailRemitente     = $credentials_email;
$identidadRemitente = $credentials_fromName;
$clientId           = $credentials_clientId;
$clientSecret       = $credentials_clientSecret;
$refreshToken       = $credentials_refreshToken;




//Create a new OAuth2 provider instance
$provider = new Google(
    [
        'clientId' => $clientId,
        'clientSecret' => $clientSecret,
    ]
);

//Pass the OAuth provider instance to PHPMailer
$mail->setOAuth(
    new OAuth(
        [
            'provider' => $provider,
            'clientId' => $clientId,
            'clientSecret' => $clientSecret,
            'refreshToken' => $refreshToken,
            'userName' => $emailRemitente,
        ]
    )
);


$mail->setFrom($emailRemitente, $identidadRemitente); // 
$mail->addAddress($emailTo);
$mail->Subject = 'TAMPICO34 - Solicitud de contacto'; // 
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->CharSet = PHPMailer::CHARSET_UTF8;

$msg = "<table>";
$msg .= "<tr><td style='width:120px'>&nbsp;</td><td>&nbsp;</td></tr>";
$msg .= "<tr><td>Nombre</td><td>".$msgNombre."</td></tr>";
$msg .= "<tr><td>Email</td><td>".$msgCorreo."</td></tr>";
$msg .= "<tr><td>Teléfono</td><td>".$msgTelefono."</td></tr>";
$msg .= "<tr><td>Mensaje</td><td>".$msgMensaje."</td></tr>";
$msg .= "</table>";
	


$mail->msgHTML($msg);

//Replace the plain text body with one created manually
//$mail->AltBody = 'Este es el texto plano de la prueba del PHPMailer'; // --------------------------------- OJO -OJO -OJO

// //Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: '. $mail->ErrorInfo;
} else {
    //echo 'Message sent!';
    header("Location: /views/ok.php");
}

