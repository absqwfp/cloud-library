<?php
session_start();

// التحقق من تسجيل الدخول
if (!isset($_SESSION['user_id'])) {
    header("Location: interface.html");
    exit();
}

// التوجه إلى صفحة الواجهة بعد إتمام الدفع
header("Location: interface.html");
exit();
?>