<?php

  if(isset($_POST)){
    $name = $_POST['name'];
    $subject = 'Nová poptávka z webu';
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $serviceType = $_POST['service-type'];
    $message = $_POST['message'];
    $to = 'lukas.rac@lukis-dev.cz';
    $headers = 'From: '.$email."\r\n";
    $headers .= 'MIME-Version: 1.0'."\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8'."\r\n";
    $body = "
      <html> 
      <head> 
          <style>
            .contactTable {
              font-family: sans-serif;
              border-collapse: collapse;
              width: 500px;
            }
            .contactTable td, .contactTable th {
              border: 1px solid #ddd;
              padding: 8px;
            }
            .contactTable th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              background-color: #e63254;
              color: white;
            }
          </style>
      </head> 
      <body> 
          <h1>Nová poptávka z webu</h1> 
          <table class='contactTable'> 
              <tr> 
                  <th>Jméno:</th><td>$name</td> 
              </tr> 
              <tr> 
                  <th>Email:</th><td>$email</td> 
              </tr> 
              <tr> 
                  <th>Telefon:</th><td>$phone</td> 
              </tr> 
              <tr> 
                  <th>Typ Služby:</th><td>$serviceType</td> 
              </tr> 
              <tr> 
                  <th>Zpráva:</th><td>$message</td> 
              </tr> 
          </table> 
      </body> 
      </html>
    ";
    $success = mail($to, $subject, $body, $headers);
  }

?>