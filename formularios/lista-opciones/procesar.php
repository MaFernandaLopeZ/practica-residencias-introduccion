<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar</title>
</head>
<body>
    <?php
        $usuario = $_POST['usuario'];
        $pasaje = $_POST['pasaje'];
        
        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>nombre: $usuario </p>";
        echo "<p>pasaje: $pasaje </p>";
    ?>
</body>
</html>