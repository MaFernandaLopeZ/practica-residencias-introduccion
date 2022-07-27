<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <?php
        $matricula = $_POST['matricula'];
        $mate = $_POST['mate'];
        $algo = $_POST['algo'];
        $sis = $_POST['sis'];
        $rob = $_POST['rob'];

        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>matricula: $matricula </p>";

        if (!empty($mate)) {
            echo "<p>matematicas: on </p>";
        }
        if (!empty($algo)) {
            echo "<p>Algoritmia: on </p>";
        }
        if (!empty($sis)) {
            echo "<p>Sistemas: on </p>";
        }
        if (!empty($rob)) {
            echo "<p>Robotica: on </p>";
        }
    ?>   
</body>
</html>