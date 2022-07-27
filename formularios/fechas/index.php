<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Fechas</title>
</head>
<body>
    <form action="procesar.php" method="post">
        <label>Nombre</label>  
        <input type="text" id="nombre" name="nombre" placeholder="nombre" required>
        <label>N&uacute;mero de personas</label>  
        <input type="number" id="personas" name="personas" placeholder="personas" required>
        <label>Fecha de llegada</label><br>
        <input type="date" id="llegada" name="llegada" required>
        <label>Fecha de salida</label><br>
        <input type="date" id="salida" name="salida" required>

        <input type="submit" value="Enviar">  
    </form>
</body>
</html>