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
        $ciu = $_POST['ciudad'];
        $tel = $_POST['telefono'];
        $nivelIngles = $_POST['nivel-ingles'];

        echo "<h4>Datos recibidos por POST</h4>";
        echo "<p>nombre: $nom </p>";
        echo "<p>ciudad: $ciu </p>";
        echo "<p>telefono: $tel </p>";

        if(isset($_POST['js'])){
            echo "<p>Javascript: ".$_POST['js']."</p>";
        }
        if(isset($_POST['php'])){
            echo "<p>php: ".$_POST['php']."</p>";
        }
        if(isset($_POST['nodeJS'])){
            echo "<p>nodeJS: ".$_POST['nodeJS']."</p>";
        }
        if(isset($_POST['python'])){
            echo "<p>python: ".$_POST['python']."</p>";
        }
        echo "<p>Nivel de Inglés: $nivelIngles </p>";
    ?>
</body>
</html>