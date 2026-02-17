<?php
$conn = new mysqli("localhost", "root", "Divya@814", "purchase_orders_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
