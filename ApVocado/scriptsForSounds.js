// Definición de la función para reproducir sonido
function playSound(soundPath) {
  var sound = new Audio();

  // Establecer la ruta del archivo de sonido
  sound.src = soundPath;

  // Reproducir el sonido
  sound.play();
}
