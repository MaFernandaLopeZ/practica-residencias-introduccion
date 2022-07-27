<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar</title>
    <style>
        *{margin:0;}
    </style>
</head>
<body>
    <?php
        $tipo = $_POST['tipo-usuario'];
        $alias = $_POST['alias'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];

        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>tipo: $tipo </p>";
        echo "<p>alias: $alias </p>";
        echo "<p>email: $email </p>";
        echo "<p>telefono: $telefono </p>";
    ?> 
</body>
</html>