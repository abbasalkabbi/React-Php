<?php
//include filles
require_once 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST){
    $email=$_POST['email'];
    $password=$_POST['password'];
    if(!empty($email) && !empty($password)){
        // if input not empty
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            //if is email
               //search is email is already login
               $email_check=mysqli_query($conn,"SELECT * FROM users WHERE email = '{$email}'");
               if(mysqli_num_rows($email_check) >0){
                   //if email is curretc
                   $login=mysqli_query($conn,"SELECT * FROM users WHERE email ='{$email}' AND password = '{$password}'");
                   if(mysqli_num_rows($login)){
                       // if loggin
                    while($obj = mysqli_fetch_object($login)){
                        $id= $obj -> id; //hendle Unique_id
                    }
                    $_SESSION['id']=$id; 
                    if($_SESSION['id']){
                      
                        echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id']]);
                    }
                 //End get seesion
                   }else{
                       // if password wrong
                       echo json_encode(['status'=>false,"message" => "Password is not wrong"]);
                   }

               }else{
                  //if email is wrong
                  echo json_encode(['status'=>false,"message" => "($email) is not login"]);
               }
        }else{
            // if is not eamil
            echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
        }
    }else{
        // if input is empty
        echo json_encode(["status" => false, "message" => "Input is Empty"]);
    }
}
  
?>