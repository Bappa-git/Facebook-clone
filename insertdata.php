<?php
$conn = mysqli_connect("localhost", "root", "", "facebook");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $u_email = $_POST['u_email'];
        $u_pass = $_POST['u_pass'];
    
      
        if (empty($u_email)||empty($u_pass)) {
    
            echo "<script>alert('empty fields');window.location.href='insert.html';</script>";
        
        } elseif (!empty($u_email) && !empty($u_pass)) {
    
           $insert="INSERT INTO login (u_email, u_pass)VALUE('$u_email','$u_pass')";
           $result= mysqli_query($conn,$insert);
           if($conn==true){
    
            echo "<script>alert('Signup successfull');window.location.href='index.html';</script>";
    
           }
           else{
            echo "<script>alert('data not add please try again');window.location.href='singup.html';</script>";
    
           }
           
        }
        else {
            echo "<script>alert('please try again...');window.location.href='singup.html';</script>";
        }
    } else {
        echo "<script>alert('method not supported')</script>";
    }
    
?>