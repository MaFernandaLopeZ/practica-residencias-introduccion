<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>Lotes</title>
</head>
<body>
    <form action="procesar.php" method="get">
        <label>Número de botellas (en lotes de 3) </label>  
        <input type="number" id="cantidad" name="cantidad" placeholder="botellas" min="3" step="3" required >
        <input type="submit" value="Enviar">  
    </form>
</body>
</html>