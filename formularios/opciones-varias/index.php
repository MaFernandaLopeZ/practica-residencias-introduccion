<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opciones varias</title>

    <style>
        form{
            display:block;
            width:50%;
            margin:0 auto
        }
        input{
            margin: 8px 0;
        }
        .checklabel{
            width: 8em; 
            display:inline-block
        }
    </style>
</head>
<body>
    <form action="procesar.php" method="post">
        <label for="matricula">N&uacute;mero de matr&iacute;cula</label> <input type="text" name="matricula" id="matricula" placeholder="Matrícula" pattern="M[0-9]{3}" required>
        <p>Materias</p>
        <label for="mate" class="checklabel">Matematicas</label> <input type="checkbox" name="mate" id="mate"> <br>
        <label for="algo" class="checklabel">Algor&iacute;tmia</label> <input type="checkbox" name="algo" id="algo"> <br>
        <label for="sis" class="checklabel">Sistemas</label> <input type="checkbox" name="sis" id="sis"> <br>
        <label for="rob" class="checklabel">Rob&oacute;tica</label> <input type="checkbox" name="rob" id="rob"> <br>

        <input type="submit" value="Enviar">
    </form>
</body>
</html>