<?php
session_start();
session_destroy(); // مسح الجلسة

header("Location: index.html");
exit();
?>