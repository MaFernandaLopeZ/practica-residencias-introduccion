<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Document</title>
</head>
<body>
    <form action="procesar.php" method="post">
        <input type="hidden" id="tipo-usuario" name="tipo-usuario" value="usuario-nuevo">
        <label>Alias</label>  
        <input type="text" id="alias" name="alias" placeholder="alias" required>
        <label>E-mail</label>  
        <input type="email" id="email" name="email" placeholder="e-mail" required>
        <label>Teléfono</label><br>
        <input type="phone" id="telefono" name="telefono" placeholder="telefono" required>

        <input type="submit" value="Enviar">
        <input type="reset" value="Restaurar">
    </form>
</body>
</html>