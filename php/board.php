<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Styles/styles.css">
    <title>Message</title>
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
    <form action="board.php" method="get">
        <?php
        session_start();

        $var = $_SESSION["username"];
        printf("<p>Hi %s</p>", $var);
        ?>
        <button class="logout" type="submit" value="logout" name="logout">Log Out</button>
    </form>
    <div class="formcont">
        <h1 class="formh1">Enter Your Post</h1>
        <form action="board.php" method="post">
            <label class="feedback" for="message">Post: </label>
            <input class="a2" type="text" placeholder="Enter your message" id="message" name="message">
            <button type="submit">New Post</button>
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


    if (!$_SESSION['username']) {
        header("Location: login.php");
    } else {
        if (isset($_GET['logout'])) {
            session_destroy();
            header("Location: login.php");
        }

        if (isset($_POST["message"])) {
            $uid = uniqid();
            $replyto = null;
            $postedby = $_SESSION['username'];
            $msg = $_POST["message"];
            $query = "INSERT INTO `posts`(`id`, `replyto`, `postedby`, `datetime`, `message`) VALUES ('$uid','$replyto','$postedby',now(),'$msg')";
            $connection->query($query);
        }

        if (isset($_POST["replyto"])) {
            $uid = uniqid();
            $replyto = $_POST["replyto"];
            $postedby = $_SESSION['username'];
            $msg = $_POST["reply"];
            $query = "INSERT INTO `posts`(`id`, `replyto`, `postedby`, `datetime`, `message`) VALUES ('$uid','$replyto','$postedby',now(),'$msg')";
            $connection->query($query);
        }

        $displayquery = 'select * from posts inner join users where posts.postedby = users.username ORDER by datetime DESC;';
        $responses = $connection->query($displayquery);
        foreach ($responses as $row) {
            echo '<form method="post">';
            echo '<input type=hidden name="replyto" value="' . $row['id'] . '"/><br>';
            print '<b>Message Id: </b>' . $row['id'] . "\n";
            if ($row['replyto'] != null)
                print '<br><b>Replied to Message with message Id: </b>' . $row['replyto'] . "\n";
            print '<br><b>Username: </b>' . $row['username'] . "\n" . '<br><b>Full Name: </b>' . $row['fullname'] . "\n";
            print '<br><b>Date and Time: </b>' . $row['datetime'] . "\n";
            print '<br><b>Message: </b>' . $row['message'] . "\n";
            echo '<br><input type="text" id="reply" name="reply"/><br>';
            echo '<button class="btns" type="submit" formaction="board.php">Reply</button></form><br>';
            print "\n\n\n\n";
        }
    }

    ?>

</body>

</html>