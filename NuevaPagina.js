function Volver() {
	location.href = "./Mensaje.html";
}

function Mostrar(identidad, identidadBoton) {
	var mostrarOcultar = document.getElementById(identidadBoton).textContent; //si vale + es que estoy mostrando, si vale - estoy ocultando

	if (document.getElementById(identidad).classList.contains("mostrar")) {
		//contrae el texto si está expandido y lo expande en caso contrario
		document.getElementById(identidad).classList.remove("mostrar");
		document.getElementById(identidadBoton).textContent = "+";
	} else {
		document.getElementById(identidad).classList.add("mostrar");
		document.getElementById(identidadBoton).textContent = "-";
	}

	//Los campos del arbol se definen div'#nivelppal'niv'#subnivel'-'#orden dentro del nivel'
	var nivelPpal = Number(
		identidad.substring(identidad.indexOf("div") + 3, identidad.indexOf("niv"))
	);
	var subnivel = Number(
		identidad.substring(identidad.indexOf("niv") + 3, identidad.indexOf("-"))
	);
	var orden = Number(
		identidad.substring(identidad.indexOf("-") + 1, identidad.length)
	);

	for (let i = subnivel; i < 10; i++) {
		for (let j = orden; j < 10; j++) {
			identidad = "div" + nivelPpal + "niv" + i + "-" + j;
			identidadBoton = "mas" + nivelPpal + "niv" + i + "-" + j;

			if (document.getElementById(identidad)) {
				if (
					document.getElementById(identidad).classList.contains("mostrar") &&
					mostrarOcultar.indexOf("-") != -1
				) {
					//contrae el texto si está expandido y lo expande en caso contrario
					document.getElementById(identidad).classList.remove("mostrar");
					document.getElementById(identidadBoton).textContent = "+";
				} else {
					if (mostrarOcultar.indexOf("+") != -1) {
						document.getElementById(identidad).classList.add("mostrar");
						document.getElementById(identidadBoton).textContent = "-";
					}
				}
			}
		}
	}
}

function MostrarTodos() {
	var elmnt = document.getElementsByClassName("contenedor");
	var i;
	for (i = 0; i < elmnt.length; i++) {
		elmnt[i].classList.add("mostrar");
		elmnt[i].firstElementChild.textContent = "-";
	}
}

function OcultarTodos() {
	var elmnt = document.getElementsByClassName("contenedor");
	var i;
	for (i = 0; i < elmnt.length; i++) {
		elmnt[i].classList.remove("mostrar");
		elmnt[i].firstElementChild.textContent = "+";
	}
}
