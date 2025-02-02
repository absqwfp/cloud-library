<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // تخزين بيانات المستخدم في الجلسة
    $_SESSION['user_id'] = uniqid(); // معرف وهمي للمستخدم
    $_SESSION['email'] = $_POST['email']; // تخزين البريد الإلكتروني

    // التوجه إلى صفحة الدفع
    header("Location: payment.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="index-styles.css">
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form action="" method="POST">
            <input type="email" name="email" placeholder="Enter your email" required>
            <input type="password" name="password" placeholder="Enter your password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>
