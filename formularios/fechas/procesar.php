<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nom = $_POST['nombre'];
        $personas = $_POST['personas'];
        $llegada = $_POST['llegada'];
        $salida = $_POST['salida'];
        
        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>nombre: $nom </p>";
        echo "<p>personas: $personas </p>";
        echo "<p>llegada: $llegada </p>";
        echo "<p>salida: $salida </p>";
    ?>
</body>
</html>