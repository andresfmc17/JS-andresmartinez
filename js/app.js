var primer;
var segundo;
var operacion;

function calculadora1(){
	var display = document.getElementById("display");
	var on = document.getElementById("on");
	var sign = document.getElementById("sign");
	var raiz = document.getElementById("raiz");
	var dividido = document.getElementById("dividido");
	var uno = document.getElementById("1");
	var dos = document.getElementById("2");
	var tres = document.getElementById("3");
	var cuatro = document.getElementById("4");
	var cinco = document.getElementById("5");
	var seis = document.getElementById("6");
	var siete = document.getElementById("7");
	var ocho = document.getElementById("8");
	var nueve = document.getElementById("9");
	var cero = document.getElementById("0");
	var por = document.getElementById("por");
	var menos = document.getElementById("menos");
	var punto = document.getElementById("punto");
	var igual = document.getElementById("igual");
	var mas = document.getElementById("mas");
	sign.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = "-";
		}
		sign.style.transform="scale(0.95)";
		setTimeout(function() {sign.style.transform="scale(1)";}, 100);
	}
	punto.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + ".";
		}
		punto.style.transform="scale(0.95)";
		setTimeout(function() {punto.style.transform="scale(1)";}, 100);
	}
	
	uno.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "1";
		}
		uno.style.transform="scale(0.95)";
		setTimeout(function() {uno.style.transform="scale(1)";}, 100);
	}
	dos.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "2";
		}
		dos.style.transform="scale(0.95)";
		setTimeout(function() {dos.style.transform="scale(1)";}, 100);
	}
	tres.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "3";
		}
		tres.style.transform="scale(0.95)";
		setTimeout(function() {tres.style.transform="scale(1)";}, 100);
	}
	cuatro.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "4";
		}
		cuatro.style.transform="scale(0.95)";
		setTimeout(function() {cuatro.style.transform="scale(1)";}, 100);
	}
	cinco.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "5";
		}
		cinco.style.transform="scale(0.95)";
		setTimeout(function() {cinco.style.transform="scale(1)";}, 100);
	}
	seis.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "6";
		}
		seis.style.transform="scale(0.95)";
		setTimeout(function() {seis.style.transform="scale(1)";}, 100);
	}
	siete.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "7";
		}
		siete.style.transform="scale(0.95)";
		setTimeout(function() {siete.style.transform="scale(1)";}, 100);
	}
	ocho.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "8";
		}
		ocho.style.transform="scale(0.95)";
		setTimeout(function() {ocho.style.transform="scale(1)";}, 100);
	}
	nueve.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "9";
		}
		nueve.style.transform="scale(0.95)";
		setTimeout(function() {nueve.style.transform="scale(1)";}, 100);
	}
	cero.onclick = function(e){
		if(display.innerHTML.length < 8){
		 display.innerHTML = display.innerHTML  + "0";
		}
		cero.style.transform="scale(0.95)";
		setTimeout(function() {cero.style.transform="scale(1)";}, 100);
	}
	on.onclick = function(e){
		on.style.transform="scale(0.95)";
		setTimeout(function() {on.style.transform="scale(1)";}, 100);
		resetear();
	}
	mas.onclick = function(e){
		primer = display.innerHTML;
		operacion = "+";
		mas.style.transform="scale(0.95)";
		setTimeout(function() {mas.style.transform="scale(1)";}, 100);
		limpiar();
	}
	menos.onclick = function(e){
		primer = display.innerHTML;
		operacion = "-";
		menos.style.transform="scale(0.95)";
		setTimeout(function() {menos.style.transform="scale(1)";}, 100);
		limpiar();
	}
	por.onclick = function(e){
		primer = display.innerHTML;
		operacion = "*";
		por.style.transform="scale(0.95)";
		setTimeout(function() {por.style.transform="scale(1)";}, 100);
		limpiar();
	}
	dividido.onclick = function(e){
		primer = display.innerHTML;
		operacion = "/";
		dividido.style.transform="scale(0.95)";
		setTimeout(function() {dividido.style.transform="scale(1)";}, 100);
		limpiar();
	}
	igual.onclick = function(e){
		segundo = display.innerHTML;
		igual.style.transform="scale(0.95)";
		setTimeout(function() {igual.style.transform="scale(1)";}, 100);
		resolver();
	}
	

} 
function resetear(){
	display.innerHTML="";
	primer = 0;
	segundo = 0;
	operacion = "";
}
function limpiar(){
	display.innerHTML="";
}

function resolver(){
	var respuesta = 0;
	switch (operacion){
		case "+":
		respuesta = parseFloat(primer)+ parseFloat(segundo)
			break;
		case "-":
		respuesta = parseFloat(primer)- parseFloat(segundo)
			break;
		case "/":
		respuesta = parseFloat(primer)/ parseFloat(segundo)
			break;
		case "*":
		respuesta = parseFloat(primer)* parseFloat(segundo)
			break;			
	}
	resetear();
	display.innerHTML = respuesta;
}





