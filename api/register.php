<?php
//include filles
require_once 'config.php';
session_start();
$DIR = "./assets/";
$httpPost = file_get_contents("php://input");
$_POST = json_decode($httpPost,true);



if ($_POST){
    $fname=$_POST['fname'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $image=$_POST['image'];

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
                                 // check if not is image
                                if(empty($image)){
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
                                            
                                              echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id']]);
                                          }
                                       //End get seesion
                                }else{
                                    // if there image
                                    $file_chunks = explode(";base64,", $_POST['image']);
                                    $fileType = explode("image/", $file_chunks[0]);
                                    $image_type = $fileType[1];
                                    $base64Img = base64_decode($file_chunks[1]);
                                    $name_img= uniqid() . '.'.$image_type;
                                    $file = $DIR . $name_img;
                                    file_put_contents($file, $base64Img); 
                                    
                                    $insert_form=mysqli_query($conn,"INSERT INTO users (Name,email,password,image) VALUES('$fname','$email','$password','$name_img')");
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
                                            
                                              echo json_encode(['status'=>true,"message" => "successful","id"=>$_SESSION['id']]);
                                          }
                                       //End get seesion
                                       
                                }
                                
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
