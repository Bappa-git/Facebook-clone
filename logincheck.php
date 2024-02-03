<?php                //"username and password validate from databasein php video link- https://www.youtube.com/watch?v=ipyRsC2z7Zg"

$conn = mysqli_connect("localhost", "root", "", "facebook");

// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
//   }
//   echo "Connected successfully";

  if(!empty($_POST['save'])){
    $username=$_POST["u_email"];
    $password=$_POST["u_pass"];
    $query="select* from login where u_email='$username' and u_pass='$password'";
    $result= mysqli_query($conn,$query);
    $count=mysqli_num_rows($result);

    if($count>0){
        
        echo "<script>alert('login successful');window.location.href='home.html';</script>";
    }else{
        echo "<script>alert('please Enter a valid userName and Password');window.location.href='index.html';</script>";
    }
  }