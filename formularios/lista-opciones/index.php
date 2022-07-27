<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Lista de opciones</title>
</head>
<body>
    <form action="procesar.php" method="post">
        <label for="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" placeholder="Nombre del viajero">
        <label for="pasaje">Clase de pasaje</label>
        <select name="pasaje" id="pasaje">
            <option value="0">Vip</option>
            <option value="1">Especial</option>
            <option value="2">Primera</option>
            <option value="3">Segunda</option>
        </select>
        <br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>