<?php 
require('config.php');

if ($_GET){
    $id=$_GET['id'];
   if(!empty($id)){
       $data=mysqli_query($conn,"SELECT * FROM users WHERE id=$id");
       if(mysqli_num_rows($data)){
        while($obj = mysqli_fetch_object($data)){
          
            echo json_encode($obj);
        }
       }
   }


}
?>