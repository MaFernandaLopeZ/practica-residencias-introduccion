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
        $articulo = $_GET['articulo'];
        $entrega = $_GET['entrega'];

        echo "<h4>Datos recibidos por GET</h4>";
        echo "<p>nombre: $articulo </p>";
        echo "<p>entrega: $entrega </p>";
    ?>   
</body>
</html>