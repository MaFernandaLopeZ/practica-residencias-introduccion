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
        <label>Fruta</label>
        <select id="fruta" name="fruta">
            <option value="manzanas">Manzanas</option>
            <option value="naranjas">Naranjas</option>
            <option value="mandainas">Mandarinas</option>
        </select>
        <label>Cantidad</label>  
        <input type="text" id="cantidad" name="cantidad" placeholder="numero unidad" pattern="[0-9]+(kg|gr|ud)" required>
        <input type="submit" value="Enviar">  
    </form>
</body>
</html>