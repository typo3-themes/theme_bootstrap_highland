<?php

// reCaptcha Setup
// ===============

// Insert below your reCaptcha Public and Private Keys
// Go to https://www.google.com/recaptcha/admin/create if you don't have the keys yet

$publickey = "your_public_key";
$privatekey = "your_private_key";

// Mail Setup
// ==========

// Sender Name and <email address> separated by space
$mail_sender = 'Support <support@example.com>';
// Your Email Address where new emails will be sent to
$to_email = 'admin@example.com';
// Email Subject
$mail_subject = 'Support Request';

// Email content can be modified in the sendmail.php file.

?>