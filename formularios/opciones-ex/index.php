<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        form{
            display:block;
            width:50%;
            margin:0 auto
        }
        input{
            margin: 8px 0;
        }
    </style>
</head>
<body>
    <form action="procesar.php" method="get">
        <label for="articulo">Art&iacute;culo</label> <input type="text" name="articulo" id="articulo" placeholder="Artículo" required>
        <p>Forma de entrega</p>
        <label for="domicilio">Envio a domicilio</label> <input type="radio" name="entrega" id="entrega-domicilio" value="domicilio" required>
        <br>
        <label for="tienda">Entrega en tienda:</label> <input type="radio" name="entrega" id="entrega-tienda" value="tienda" required>
        <br>
        <input type="submit" value="Enviar">
    </form>

    

</body>
</html>