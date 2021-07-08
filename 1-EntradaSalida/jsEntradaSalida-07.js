/*OSCAR VILLALBA
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	suma = numero1 + numero2;

	alert("La suma de los numeros es de: " + suma + ".")

}

function restar()
{
	var numero1;
	var numero2;
	var resta;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resta = numero1 - numero2;

	alert("La resta de los numeros es de: " + resta + ".")
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicacion;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	multiplicacion = numero1 * numero2;

	alert("La multiplicacion de los numeros es de: " + multiplicacion + ".")
}

function dividir()
{
	var numero1;
	var numero2;
	var divicion;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	divicion = numero1 / numero2;

	alert("La divicion de los numeros es de: " + divicion + ".")
}

//no hay simbolos, hay operadores, EJ: *,/,+,-.

