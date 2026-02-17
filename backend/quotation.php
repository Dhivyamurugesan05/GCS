<?php
$conn = new mysqli("localhost", "root", "Divya@814", "quotations_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
