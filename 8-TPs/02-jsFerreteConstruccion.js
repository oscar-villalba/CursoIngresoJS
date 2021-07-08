/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var rectangulo;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    radio = parseFloat(radio);

    rectangulo = (largo * 2 + ancho *2 )*3;

    alert("La cantidad necesaria para hacer el rectangulo de tres partes es de " +  rectangulo + " metros de alambre.");
}
function Circulo () 
{
	
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var bolsaCemento;
    var bolsaCal;
    var rellenoCemento;
    var rellenoCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    bolsaCemento = 2;
    bolsaCal = 3;

    area = (largo + ancho ) /2;

    rellenoCemento = area * bolsaCemento;
    rellenoCal = area * bolsaCal;

    alert("Se necesitan " + rellenoCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.");





    


}