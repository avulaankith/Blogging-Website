<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Styles/styles.css">
    <title>Login</title>
    <link rel="icon" href="../Images/icon.png">
</head>

<body>
    <div class="topnav">
        <img src="../Images/logo.png"
            alt="logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
            href="../Index.html">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="../Pages/ContactUs.html">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="../Pages/About.html">About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="active" href="board.php">Message</a>
    </div>
    <div class="formcont">
        <h1 class="formh1">Login</h1>
        <form action="../php/login.php" method="post">
            <label class="a1" for="username"> UserName: </label>
            <input class="a2" type="text" id="username" name="username" placeholder="UserName"><br><br>
            <label class="a3" for="password">Password: </label>
            <input class="a4" type="password" id="password" name="password" placeholder="Password"><br><br>
            <button type="submit">Login</button>
        </form>
    </div>

    <?php
    $dbhost = "localhost";
    $user = "root";
    $sqlpass = "";
    $database = "board";

    $connection = new mysqli($dbhost, $user, $sqlpass, $database);


    if (!$connection) {
        echo '<script>alert("Database not connected")</script>';
        die("Your database is not connected or invalid!!" . mysqli_connect_error());
    }

    session_start();
    if ($_SESSION["username"]) {
        header("Location: ../php/board.php");
    }

    if (!empty($_POST["username"]) || !empty($_POST["password"])) {
        $username = $_POST["username"];
        $password = md5($_POST["password"]);
        $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
        $result = mysqli_query($connection, $query);
        if ($result->num_rows == 0) {
            echo '<script>alert("Incorrect Username or Password! Please check the information entered.");window.location.href="../Pages/userlogin.html"</script>';

            exit();
        } else {
            $_SESSION['username'] = $username;
            header("Location: ../php/board.php");
            exit();
        }
    }

    ?>

</body>

</html>