var maxNivel = 6 + 1; //el nivel máximo es el 6, se suma 1 para que no aparezca botón en ese nivel

function InicioNuevaPagina() {
	document.getElementById("Menu2").classList.add("seleccionado");
}

function definirBotones() {
	MostrarTodos(maxNivel);
	OcultarTodos(maxNivel);
	document.getElementById("nivelSeleccionado").value = 1;
}

function Mostrar(identidad, identidadBoton) {
	var numNivel = identidad.substring(
		identidad.indexOf("-") - 1,
		identidad.indexOf("-")
	);

	if (document.getElementById(identidadBoton).textContent != "") {
		if (document.getElementById(identidad).classList.contains("mostrar")) {
			//contrae el texto si está expandido y lo expande en caso contrario
			document.getElementById(identidad).classList.remove("mostrar");
			document.getElementById(identidadBoton).textContent = "+";
		} else {
			document.getElementById(identidad).classList.add("mostrar");
			document.getElementById(identidadBoton).textContent = "-";
		}
	}
}

function MostrarTodos(nivelMaximo) {
	if (nivelMaximo == maxNivel) {
		document.getElementById("nivelSeleccionado").value = maxNivel - 1;
	}

	if (nivelMaximo > 0) {
		for (nivel = 1; nivel <= nivelMaximo - 1; nivel++) {
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
					elmnt[i].firstElementChild.style.backgroundColor = "white";
				}
			}
		}
	}
}

function OcultarTodos(nivelMaximo) {
	for (nivel = nivelMaximo - 1; nivel >= 1; nivel--) {
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
				elmnt[i].firstElementChild.style.backgroundColor = "white";
			}
		}
	}
}
