// Función para mostrar cada paso con retardo al cargar la página
function mostrarPasosConRetardo() {
  const pasos = document.querySelectorAll("#pasosLista li details");
  let index = 0;

  function mostrarProximoPaso() {
    if (index < pasos.length) {
      pasos[index].style.display = "block";
      index++;
      setTimeout(mostrarProximoPaso, 3000); // Retardo de 1 segundo (1000 milisegundos) antes de mostrar el siguiente paso
    }
  }

  mostrarProximoPaso();
}

// Llamamos a la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", mostrarPasosConRetardo);
