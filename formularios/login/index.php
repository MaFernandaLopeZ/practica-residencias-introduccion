<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <style>
        form{
            display: block;
            /* width: 50%; */
            margin: 0 auto;
        }
        input{
            display: block;
            margin: 10px 0;
        }
    </style> -->
</head>
<body>
    <form action="resultado.php" method="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="user">Usuario</label>
        <input type="text" name="user" id="user">
        <label for="pass">Contraseña</label>
        <input type="password" name="pass" id="pass">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>