<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include('PHPMailer/src/PHPMailer.php');
include('PHPMailer/src/SMTP.php');
include('PHPMailer/src/Exception.php');

function SendBSFMail($params){
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
//    $mail->Encoding = "16bit";
    $mail->isSMTP();
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 0;

    $mail->Host = 'email-smtp.us-east-1.amazonaws.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;

    $mail->Username = 'AKIAJPRHLCDFLDEQ67BA';
    $mail->Password = 'AmGuCDkgQFeuncajz1IPubJfZ+4gQIb2fuSbatokuBrL';

    if ( isset($params["fromname"]) ){
       $mail->setFrom($params["from"], $params["fromname"]);
    } else {
       $mail->setFrom($params["from"]); 
    }
    
    if ( isset($params["replyto"]) )
    {
	$mail->addReplyTo($params["replyto"]);
    }
    //$mail->addReplyTo($params["from"], $params["fromname"]);
    $mail->addAddress($params["to"]);

    if ( isset($params["cc"])  ) $mail->AddCC($params["cc"]);
    if ( isset($params["bcc"]) ) $mail->AddBCC($params["bcc"]);

//    $mail->AddBCC("fl0425@gmail.com");
    $mail->Subject = $params["subject"];
   
    $mail->msgHTML($params["html"]);
    $mail->AltBody = $params["text"];
    //Attach an image file
    if (isset($params["files"])){
        foreach($params["files"] as $f){
            $mail->addAttachment($f);
        }
    }
//    $mail->send();
    if (!$mail->send()) {
	return false;
//        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
	return true;
//        echo 'Message sent!';
    }
}
