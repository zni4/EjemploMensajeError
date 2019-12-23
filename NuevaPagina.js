function Volver() {
	location.href = "./Mensaje.html";
}

function definirBotones() {
	MostrarTodos();
	OcultarTodos();
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

var nivelMaximo = 10;

function MostrarTodos() {
	for (nivel = 1; nivel <= nivelMaximo; nivel++) {
		var elmnt = document.getElementsByClassName("nivel" + nivel);
		var i;
		for (i = 0; i < elmnt.length; i++) {
			elmnt[i].classList.add("mostrar");

			if (
				document.querySelector("#" + elmnt[i].id).children[2] //Existe un subnivel
			) {
				elmnt[i].firstElementChild.textContent = "-";
			} else {
				//No existe subnivel
				elmnt[i].firstElementChild.textContent = "";
			}
		}
	}
}

function OcultarTodos() {
	for (nivel = nivelMaximo; nivel >= 1; nivel--) {
		var elmnt = document.getElementsByClassName("nivel" + nivel);
		var i;
		for (i = 0; i < elmnt.length; i++) {
			elmnt[i].classList.remove("mostrar");

			if (
				document.querySelector("#" + elmnt[i].id).children[2] //Existe un subnivel
			) {
				elmnt[i].firstElementChild.textContent = "+";
			} else {
				//No existe subnivel
				elmnt[i].firstElementChild.textContent = "";
			}
		}
	}
}
