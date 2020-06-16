<?php
$servername = "ENZO";
$database = "localhost";
$username = "prueba";
$password = "picaporte";


// Create connection
$conn = mysqli_connect($database, $username, $password,$servername);

    mysqli_set_charset($conn, 'utf8');
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


echo "Connected successfully";
$sql = "INSERT INTO  clientes (nombre,correo,telefono,mensaje) VALUES ('$msgNombre', '$msgCorreo', '$msgTelefono','$msgMensaje')";
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>