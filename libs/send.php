<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/autoload.php';

if (isset($_POST)) {


  //   $servername = "rds.enzo.es";
  //   $username   = "enzo_es";
  //   $password   = "butthead";
  //   $dbname     = "enzo_es";

  //   $conn = new mysqli($servername, $username, $password, $dbname);

  //   if ($conn->connect_error) {
  //       die("Connection failed: " . $conn->connect_error);
  //   }

    $FirstName = $_POST['FirstName'];
    $Email = $_POST['Email'];
    $Phone = $_POST['Phone'];
    $Information = $_POST['Information'];

  //   $sql = "INSERT INTO wp_contacto (FirstName, Email, Phone, Information) VALUES ('".$FirstName."', '".$Email."', '".$Phone."', '".$Information."'); ";

  //   if ($conn->query($sql) === true) {
		// echo "Ok";
		// $mail = true;
  //   } else {
		// echo "Error";
		// $mail = false;
  //   }

  //   $conn->close();


    // Enviar mail
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// $debug = 0;
	
	// if ($mail) {


$mail = new PHPMailer(true);

try {

	    
	    $msgMensaje = "<table>";
	    $msgMensaje .= "<tr><td style='width:120px'>&nbsp;</td><td>&nbsp;</td></tr>";
	    $msgMensaje .= "<tr><td>Nombre</td><td>".$FirstName."</td></tr>";
	    $msgMensaje .= "<tr><td>Email</td><td>".$Email."</td></tr>";
	    $msgMensaje .= "<tr><td>Teléfono</td><td>".$Phone."</td></tr>";
	    $msgMensaje .= "<tr><td>Consulta</td><td>".$Information."</td></tr>";
	    $msgMensaje .= "</table>";

	    //Mensaje
	    $msgAsunto = "Formulario contacto Tampico34.ENZO.es";

	    $mail = new PHPMailer();
	    $mail->CharSet = 'UTF-8';
	    $mail->IsSMTP(true); // enable SMTP
	    // if ($debug == 1) {
	    //     $mail->SMTPDebug = 2;
	    // }

        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'dev@enzo.es';
        $mail->Password   = 'enzoisthebest123*';
        $mail->SMTPSecure = 'SSL';
        $mail->Port       = 587;
        $mail->Mailer     = "SMTP";
        $mail->Timeout    = 60;
        $mail->setFrom('dev@enzo.es', 'dev@enzo.es');

	    $mail->Body     = $msgMensaje;
	    $mail->Subject = $msgAsunto;
		$mail->AddAddress("tampico34.comfrancisco.mendez@enzo.es");
	    $mail->isHTML(true);

	    $mail->Send();


    echo 'Message has been sent';
    header('Location: ../index.php');


} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


	    // exit;



	// }

}
