<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="../assets/css/style.css"> -->
    <title>Registro</title>
    <style>
        form{
            display:block;
            width:50%; 
            margin:0 auto;
        }
        input{
            margin: 8px 0; 
            display:inline-block;
        }
        .checklabel{
            width: 100px;
            display:inline-block
        }
</style> 
</head>
<body>
<form action="procesar.php" method="post">
    <label>Nombre</label>  
    <input type="text" id="nombre" name="nombre" placeholder="nombre" required >
    <br>
    <label>Ciudad</label>  
    <input type="text" id="ciudad" name="ciudad" placeholder="ciudad" >
    <br>
    <label>Teléfono</label>  
    <input type="phone" id="telefono" name="telefono" placeholder="teléfono">
    <br>
    <br>

    <fieldset id="lenguajes" name="lenguajes">
        <legend>Lenguajes que conoce</legend>
            <label class="checklabel">Javascript</label>
            <input type="checkbox" id="js" name="js" value="si" checked>
            <br>
            
            <label class="checklabel">PHP</label>
            <input type="checkbox" id="php" name="php" value="si">
            <br>
    
            <label class="checklabel">NodeJS</label>
            <input type="checkbox" id="nodeJS" name="nodeJS" value="si">
            <br>
            
            <label class="checklabel">Python</label>
            <input type="checkbox" id="python" name="python" value="si">
    </fieldset>

    <br>   
    <p>Nivel de Ingl&eacute;s</p>
    <label class="checklabel">Bajo</label>
    <input type="radio" id="bajo" name="nivel-ingles" value="bajo" checked><br>
    
    <label class="checklabel">Medio</label>
    <input type="radio" id="medio" name="nivel-ingles" value="medio"><br>
    
    <label class="checklabel">Alto</label>
    <input type="radio" id="alto" name="nivel-ingles" value="alto"><br>
    
    <input type="submit" value="Enviar">  
  </form>
</body>
</html>