function InicioOpcion3() {
	document.getElementById("Menu3").classList.add("seleccionado");
}

function fijarquitarInfoSecundaria(numElemento) {

    if (document.getElementById("infoContenedor" + numElemento).classList.contains("infoContenedor")) {
        document.getElementById("infoContenedor" + numElemento).classList.remove("infoContenedor");
        document.getElementById("infoContenedor" + numElemento).classList.add("infoContenedorMostrar");
    }
    else {
        document.getElementById("infoContenedor" + numElemento).classList.remove("infoContenedorMostrar");
        document.getElementById("infoContenedor" + numElemento).classList.add("infoContenedor");
    }

    if (document.getElementById("infoPrincipal" + numElemento).classList.contains("infoPrincipal")) {
        document.getElementById("infoPrincipal" + numElemento).classList.remove("infoPrincipal");
        document.getElementById("infoPrincipal" + numElemento).classList.add("infoPrincipalMostrar");
    }
    else {
        document.getElementById("infoPrincipal" + numElemento).classList.remove("infoPrincipalMostrar");
        document.getElementById("infoPrincipal" + numElemento).classList.add("infoPrincipal");
    }

    if (document.getElementById("infoSecundaria" + numElemento).classList.contains("infoSecundaria")) {
        document.getElementById("infoSecundaria" + numElemento).classList.remove("infoSecundaria");
        document.getElementById("infoSecundaria" + numElemento).classList.add("infoSecundariaMostrar");
    }
    else {
        document.getElementById("infoSecundaria" + numElemento).classList.remove("infoSecundariaMostrar");
        document.getElementById("infoSecundaria" + numElemento).classList.add("infoSecundaria");
    }

    if (document.getElementById("flechaDerecha" + numElemento).classList.contains("flechaDerecha")) {
        document.getElementById("flechaDerecha" + numElemento).classList.remove("flechaDerecha");
        document.getElementById("flechaDerecha" + numElemento).classList.add("flechaDerechaMostrar");
    }
    else {
        document.getElementById("flechaDerecha" + numElemento).classList.remove("flechaDerechaMostrar");
        document.getElementById("flechaDerecha" + numElemento).classList.add("flechaDerecha");
        document.getElementById("infoDerecha" + numElemento).classList.remove("infoDerechaMostrar");
        document.getElementById("infoDerecha" + numElemento).classList.add("infoDerecha");
    }
}

function mostrarDerecha(numElemento) {
    if (document.getElementById("infoDerecha" + numElemento).classList.contains("infoDerecha")) {
        document.getElementById("infoDerecha" + numElemento).classList.remove("infoDerecha");
        document.getElementById("infoDerecha" + numElemento).classList.add("infoDerechaMostrar");
    }
    else {
        document.getElementById("infoDerecha" + numElemento).classList.remove("infoDerechaMostrar");
        document.getElementById("infoDerecha" + numElemento).classList.add("infoDerecha");
    }
}
