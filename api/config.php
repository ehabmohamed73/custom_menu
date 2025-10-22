<?php
$host = "localhost";
$user = "root"; // غيّره حسب إعداداتك
$pass = "";     // غيّره إذا عندك كلمة مرور
$db   = "menumaster";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

$conn->set_charset("utf8mb4");
?>