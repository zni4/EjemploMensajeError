function InicioOpcion3() {
	document.getElementById("Menu3").classList.add("seleccionado");
}

function fijarquitarInfoSecundaria() {

    if (document.getElementById("infoContenedor1").classList.contains("infoContenedor")) {
        document.getElementById("infoContenedor1").classList.remove("infoContenedor");
        document.getElementById("infoContenedor1").classList.add("infoContenedorMostrar");
    }
    else {
        document.getElementById("infoContenedor1").classList.remove("infoContenedorMostrar");
        document.getElementById("infoContenedor1").classList.add("infoContenedor");
    }

    if (document.getElementById("infoPrincipal1").classList.contains("infoPrincipal")) {
        document.getElementById("infoPrincipal1").classList.remove("infoPrincipal");
        document.getElementById("infoPrincipal1").classList.add("infoPrincipalMostrar");
    }
    else {
        document.getElementById("infoPrincipal1").classList.remove("infoPrincipalMostrar");
        document.getElementById("infoPrincipal1").classList.add("infoPrincipal");
    }

    if (document.getElementById("infoSecundaria1").classList.contains("infoSecundaria")) {
        document.getElementById("infoSecundaria1").classList.remove("infoSecundaria");
        document.getElementById("infoSecundaria1").classList.add("infoSecundariaMostrar");
    }
    else {
        document.getElementById("infoSecundaria1").classList.remove("infoSecundariaMostrar");
        document.getElementById("infoSecundaria1").classList.add("infoSecundaria");
    }

    if (document.getElementById("flechaDerecha1").classList.contains("flechaDerecha")) {
        document.getElementById("flechaDerecha1").classList.remove("flechaDerecha");
        document.getElementById("flechaDerecha1").classList.add("flechaDerechaMostrar");
    }
    else {
        document.getElementById("flechaDerecha1").classList.remove("flechaDerechaMostrar");
        document.getElementById("flechaDerecha1").classList.add("flechaDerecha");
        document.getElementById("infoDerecha1").classList.remove("infoDerechaMostrar");
        document.getElementById("infoDerecha1").classList.add("infoDerecha");
    }
}

function mostrarDerecha() {
    if (document.getElementById("infoDerecha1").classList.contains("infoDerecha")) {
        document.getElementById("infoDerecha1").classList.remove("infoDerecha");
        document.getElementById("infoDerecha1").classList.add("infoDerechaMostrar");
    }
    else {
        document.getElementById("infoDerecha1").classList.remove("infoDerechaMostrar");
        document.getElementById("infoDerecha1").classList.add("infoDerecha");
    }
}
