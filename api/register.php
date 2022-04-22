<?php
//include filles
require_once 'config.php';
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $fname=$_POST['fname'];
    
    $email=$_POST['email'];
    $password=$_POST['password'];
  
    if(!empty($fname) && !empty($email) && !empty($password)){
        // if not empty 
       
        // cheack is email
             if (filter_var($email,FILTER_VALIDATE_EMAIL)){
                 //search is email is already login
                 $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
                 if(mysqli_num_rows($email_check) >0){
                    // if email is already login
                    echo json_encode(['status'=>false,"message" => "This email ($email) already exist!"]);
                 }else{
                     // check name is begger then 4char
                     if(strlen($fname)>=4){
                               // check password is begger then 8char
                             if(strlen($password)>=7){
                                
                                $insert_form=mysqli_query($conn,"INSERT INTO users (Name,email,password) VALUES('$fname','$email','$password')");
                                //get seesion
                                if($insert_form){
                                    $login= mysqli_query($conn,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
                                    if(mysqli_num_rows($login)){
                                        while($obj = mysqli_fetch_object($login)){
                                            $id= $obj -> id; //hendle Unique_id
                                        }
                                    }
                                }
                                $_SESSION['id']=$id; 
                                      if($_SESSION['id']){
                                         
                                          echo json_encode(['status'=>true,"message" => "successful"]);
                                      }
                                   //End get seesion
                             }else{
                               // if name is short
                               echo json_encode(['status'=>false,"message" => "This password ($password) is short "]);
                             }
                     }else{
                         // if name is short
                        echo json_encode(['status'=>false,"message" => "This Name ($fname) is short"]);
                     }
                 }
             }else{
                 // if is not eamil
                 echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
             }
        
    }else{
        echo json_encode(["status" => false, "message" => "Input is Empty"]);
    }
}
?>