<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["FirstName"] ?? '';
    $lastName = $_POST["LastName"] ?? '';
    $email = $_POST["Email"] ?? '';
    $phone = $_POST["PhoneNumber"] ?? '';
    $message = $_POST["Message"] ?? '';

    $to = "hasasaafen1234@gmail.com"; 
    $subject = "رسالة جديدة من نموذج التواصل";
    
    $body = "الاسم: $firstName $lastName\n";
    $body .= "البريد الإلكتروني: $email\n";
    $body .= "رقم الهاتف: $phone\n";
    $body .= "الرسالة:\n$message\n";
    
    $headers = "From: info@aztech-ksa.com\r\n"; 
    $headers .= "Reply-To: $email\r\n"; 

    if (mail($to, $subject, $body, $headers)) {
        echo "success"; 
    } else {
        echo "fail";
    }
} else {
    echo "invalid";
}
?>
