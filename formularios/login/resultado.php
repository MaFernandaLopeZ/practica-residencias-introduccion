<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Resultado</title>
</head>
<body>
    <?php
        $user = $_POST["user"];
        $pass = $_POST["pass"];

        // echo "<h4>DAtos recibidos por POST</h4>";
    ?>
        <h4>DAtos recibidos por POST</h4>
        <p>nombre: <?php echo $user ?></p>
        <p>contraseña: <?php echo $pass ?></p>        
</body>
</html>