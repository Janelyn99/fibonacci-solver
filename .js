<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fibonacci</title>
</head>

<body>

    <form action="">
        <label for="fibo">Primero : </label>
        <input type="text" name="fibo" id="fibo">
        <br>
        <label for="fibo1">Segundo: </label>
        <input type="text" name="fibo1" id="fibo1">
        <br>
        <label for="maximo">Máximo : </label>
        <input type="text" name="maximo" id="maximo">
        <br>
        <br>
        <input type="button" value="Calcular serie" id="botonSolver">
        <br>
    </form>
    <br>
    <input type="button" value="Ver Tabla" id="verTabla">
    <br><br><br>

    <table id="tablaSerie" class="table table-borderless" border="1">

        <tbody id="tbody">

        </tbody>
    </table>
</body>
<script>
    function Solver(p, s, m) {
        this.primero = p;
        this.segundo = s;
        this.maximo = m;
        this.serie = [];
        this.generar = generar;

        function generar() {
            this.serie.push(this.primero)
            this.serie.push(this.segundo);
        }

    }

    var listaTodos = [];



    var generadorFibonacci = function(anterior, ultimo) {
        if (anterior + ultimo > maximoValorSerie) {
            return listaTodos;
        } else {
            nuevo = anterior + ultimo;
            listaTodos.push(nuevo);
            return generadorFibonacci(ultimo, nuevo);
        }
    }
    document.getElementById("botonSolver").addEventListener(
        "click",
        function() {
            primerElemento = parseInt(document.getElementById("fibo").value);
            segundoElemento = parseInt(document.getElementById("fibo1").value);
            maximoValorSerie = parseInt(document.getElementById("maximo").value);
            listaTodos.push(primerElemento);
            listaTodos.push(segundoElemento);
            generadorFibonacci(primerElemento, segundoElemento);

        }
    );
    var tabla = document.getElementById("tbody");
    document.getElementById("verTabla").addEventListener(
        "click",
        function() {

            for (var i = 0; i < listaTodos.length; i++) {
                var tr = document.createElement("tr"+"td"+"td")

                var td = document.createElement("td")

                td.appendChild(document.createTextNode(listaTodos[i]));
                

                tr.appendChild(td);
                 

                tabla.appendChild(tr)

            }

        })
</script>

</html>
