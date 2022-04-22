<?php

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $fname=$_POST['fname'];
    
    $email=$_POST['email'];
    $password=$_POST['password'];
  
    echo $fname  . $email . $password;
}
?>