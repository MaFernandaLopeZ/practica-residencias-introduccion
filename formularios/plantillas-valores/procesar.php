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
        $fruta  = $_POST['fruta'];
        $cant = $_POST['cantidad'];

        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>fruta: $fruta </p>";
        echo "<p>cantidad: $cant </p>";
    ?>
</body>
</html>