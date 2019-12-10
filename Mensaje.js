function MostrarMensaje(textoMensaje) {
  var divModal = document.getElementById("Mensaje");

  var pMensajeError =
    textoMensaje === undefined || textoMensaje === "" ? "" : textoMensaje;

  var mensaje = document.getElementById("Mensaje");

  if (divModal != null) {
    mensaje.parentNode.removeChild(mensaje); //Elimina el mensaje si este ya existe
  }

  //Obtenemos el body y creamos el elemento
  var divBody = document.getElementsByTagName("body")[0];
  var divNodo = document.createElement("div");

  divNodo.id = "Mensaje";
  divNodo.innerHTML = '<div class="cargando_contenedor"></div>';
  divBody.appendChild(divNodo);
  divModal = divNodo;

  divModal.innerHTML +=
    '<div class="MensajeAviso"><div class="cabecera"><button onclick="OcultarMensaje();">X</button><h4>MENSAJE</h4></div><div class="body"><span class="imagen_aviso"></span><p>' +
    textoMensaje +
    '</p></div><div class="footer"><button onclick="OcultarMensaje();" type="button">Aceptar</button></div></div>';
}

function OcultarMensaje() {
  var divModal = document.getElementById("Mensaje");

  var mensaje = document.getElementById("Mensaje");

  if (divModal != null) {
    mensaje.parentNode.removeChild(mensaje); //Elimina el mensaje
  }
}
