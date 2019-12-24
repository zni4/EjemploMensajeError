function Volver() {
	location.href = "./Mensaje.html";
}

function definirBotones() {
	MostrarTodos(10);
	OcultarTodos(10);
}

function Mostrar(identidad, identidadBoton) {
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
	if (nivelMaximo == 10) {
		document.getElementById("nivelSeleccionado").value = 10;
	}

	if (nivelMaximo > 0) {
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
					elmnt[i].firstElementChild.style.backgroundColor = "white";
				}
			}
		}
	}
}

function OcultarTodos(nivelMaximo) {
	// if (nivelMaximo == 10) {
	// 	document.getElementById("nivelSeleccionado").value = 0;
	// }

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
				elmnt[i].firstElementChild.style.backgroundColor = "white";
			}
		}
	}
}
