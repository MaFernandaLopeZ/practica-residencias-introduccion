<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{margin:0;}
    </style>
</head>
<body>
    <?php
        $cantidad = $_GET['cantidad'];

        echo "<h4>Datos recibidos por GET</h4>";
        echo "<p>cantidad: $cantidad </p>";
    ?>
</body>
</html>