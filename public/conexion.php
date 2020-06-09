<?php
$servername = "ENZO";
$database = "localhost";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($database, $username, $password,$servername);

    mysqli_set_charset($conn, 'utf8');
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>