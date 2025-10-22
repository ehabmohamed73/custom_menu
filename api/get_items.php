<?php
require_once "config.php";

$sql = "SELECT m.*, c.id AS category_id, c.name_ar AS category_name_ar, c.name_en AS category_name_en
        FROM menu_items m 
        JOIN categories c ON m.category_id = c.id 
        ORDER BY c.id DESC, m.id DESC";

$result = $conn->query($sql);

if (!$result) {
    die("SQL Error: " . $conn->error);
}

$categories = [];

while ($row = $result->fetch_assoc()) {
    $cat_id = $row['category_id'];

    // لو أول مرة نشوف التصنيف، نضيفه مع معلوماته
    if (!isset($categories[$cat_id])) {
        $categories[$cat_id] = [
            'category_id' => $cat_id,
            'category_name_ar' => $row['category_name_ar'],
            'category_name_en' => $row['category_name_en'],
            'items' => []
        ];
    }

    // نضيف الصنف ضمن التصنيف
    $categories[$cat_id]['items'][] = [
        'id' => $row['id'],
        'name_ar' => $row['name_ar'],
        'name_en' => $row['name_en'],
        'description_ar' => $row['description_ar'],
        'description_en' => $row['description_en'],
        'price' => $row['price'],
        'image' => $row['image_url']
    ];
}

echo json_encode(array_values($categories), JSON_UNESCAPED_UNICODE);
?>