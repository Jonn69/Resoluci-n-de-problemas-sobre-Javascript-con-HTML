function convertirGradosCentigradosAGradosFahrenheint() {

    var num = parseFloat(document.getElementById('numero').value)
    var f = 32
    var f1 = 9 / 5


    num = f1 * num + f


    if (num >= 212)
        document.getElementById('Respuesta').innerHTML = (num + "°F  " + "Punto de Ebullicion del Agua");
    if (num >= 98.6 && num < 212)
        document.getElementById('Respuesta').innerHTML = (num + "°F  " + "Temperatura del Cuerpo Humano");
    if (num < 98.6 && num >= 77)
        document.getElementById('Respuesta').innerHTML = (num + "°F  " + "Temperatura Ambiente");
    if (num < 77 && num >= 32)
        document.getElementById('Respuesta').innerHTML = (num + "°F  " + "Punto de Congelacion del Agua")
    if (num < 32 && num >= -459.58)
        document.getElementById('Respuesta').innerHTML = (num + "°F  " + "Cero Absoluto")
}




function calcularPorcentajes() {

    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero1').value)

    var x = 0.5
    var y = 0.07
    var respuesta1 = 0
    var respuesta2 = 0

    respuesta1 = numero1 * x
    respuesta2 = numero1 * y

    if (numero1 < 500)
        document.getElementById('result').innerHTML = (numero1 + respuesta1);
    if (numero2 >= 500)
        document.getElementById('result').innerHTML = (numero2 + respuesta2);
}

function generarTablaHTML() {

    var Filas = document.getElementById("Filas").value;
    var Columnas = document.getElementById("Columnas").value;
    var contenedor = document.getElementById("contenedor");
    var respuestas = parseInt(document.getElementById("Filas").value) * parseInt(document.getElementById("Columnas").value)


    for (i = 0; i < Filas; i++)
        for (j = 0; j < Columnas; j++)



            contenedor.innerHTML = "i";

    var tabla = "<table>";

    for (var x = 1; x <= Filas; x++) {
        tabla += "<tr>";
        for (var y = 1; y <= Columnas; y++) {
            tabla += "<td style='border: 2px solid black; " + "; padding: 5px;'> " + (respuestas) + " </td>";
            respuestas--
        }
        

        tabla += "</tr>";
    }
    tabla += "</table>";

    contenedor.innerHTML = tabla;


}