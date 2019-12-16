function Volver() {
	location.href = "./Mensaje.html";
}

function Mostrar(identidad, identidadBoton) {
	if (document.getElementById(identidad).classList.contains("mostrar")) {
		//contrae el texto si está expandido y lo expande en caso contrario
		document.getElementById(identidad).classList.remove("mostrar");
		document.getElementById(identidadBoton).textContent = "+";
	} else {
		document.getElementById(identidad).classList.add("mostrar");
		document.getElementById(identidadBoton).textContent = "-";
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
