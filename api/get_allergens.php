<?php
require_once "config.php";

$sql = "SELECT * FROM allergens ORDER BY id DESC";
$result = $conn->query($sql);

$allergens = [];
while ($row = $result->fetch_assoc()) {
    $allergens[] = $row;
}

echo json_encode($allergens);
?>