var contenedorActual = 1;
var totalContenedores = 6; // Actualiza este valor al número total de contenedores

function mostrarSiguiente() {
  var contenedorActualElem = document.getElementById("container" + contenedorActual);
  contenedorActualElem.style.display = "none";
  contenedorActual++;

  if (contenedorActual <= totalContenedores) {
    var siguienteContenedorElem = document.getElementById("container" + contenedorActual);
    siguienteContenedorElem.style.display = "block";
  }

  if (contenedorActual === totalContenedores) {
    // Si se ha llegado al último contenedor, ocultar el botón "Next"
    var nextBtn = document.getElementById("Next");
    nextBtn.style.display = "none";

  }

}

// ... (otras funciones, como verificarCampos, showModal, etc.) ...



