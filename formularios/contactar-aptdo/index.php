<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Contactar Aptdo</title>
</head>
<body>
    <form action="procesar.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" placeholder="nombre">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="mail válido">
        <label for="mensaje">Escriba su mensaje</label>
        <br>
        <textarea name="mensaje" id="mensaje" cols="40" rows="10" requierd></textarea>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>