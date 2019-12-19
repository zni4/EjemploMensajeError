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

	var identidadInicial = identidad.substring(0, 4);
	var identidadBotonInicial = identidadBoton.substring(0, 4);

	var nivelInicial = Number(
		identidad.substring(identidad.length - 1, identidad.length)
	);

	for (let i = nivelInicial + 1; i < 10; i++) {
		identidad = identidadInicial + "niv" + i;
		identidadBoton = identidadBotonInicial + "niv" + i;

		if (document.getElementById(identidad)) {
			if (
				document.getElementById(identidad).classList.contains("mostrar") &&
				mostrarOcultar.includes("-")
			) {
				//contrae el texto si está expandido y lo expande en caso contrario
				document.getElementById(identidad).classList.remove("mostrar");
				document.getElementById(identidadBoton).textContent = "+";
			} else {
				if (mostrarOcultar.includes("+")) {
					document.getElementById(identidad).classList.add("mostrar");
					document.getElementById(identidadBoton).textContent = "-";
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
