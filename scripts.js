
//Grafic
// Obtener elementos del DOM
document.addEventListener("DOMContentLoaded", function() {
  var btnDiario = document.getElementById("btnDiario");
  var btnSemanal = document.getElementById("btnSemanal");
  var btnHistorico = document.getElementById("btnHistorico");
  var btnAnual = document.getElementById("btnAnual");
  var btnMensual = document.getElementById("btnMensual");
  var graficoCanvas = document.getElementById("grafico");

  // Datos y opciones de la gráfica por días
  var dataDiario = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Hoy",
        data: [50, 60, 70, 80, 90],
        borderColor: "#1ac73c",
        color: "#fff",
        backgroundColor: "rgba(26, 199, 60, 0.2)",
        fill: true,
        borderWidth: 4,
        tension: 0.4,
      },
    ],
  };

  var optionsDiario = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Establece el inicio del eje y en 0
      },
    },
    // Opciones específicas para la gráfica por días
  };


  // Datos y opciones de la gráfica por semana
  var dataSemanal = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Ultimos 8 días",
        data: [30, 35, 40, 38, 32],
        borderColor: "rgba(255, 255, 255)",
        color: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        fill: true,
        borderWidth: 4,
        tension: 0.4,
      },
    ],
  };

  var optionsSemanal = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Establece el inicio del eje y en 0
      },
    },
    // Opciones específicas para la gráfica por semana
  };

  // Datos y opciones de la gráfica por meses
  var dataMensual = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Ultimos 13 meses",
        data: [50, 60, 70, 80, 90],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#4bc0c0ba",
        fill: true,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  var optionsMensual = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Establece el inicio del eje y en 0
      },
    },
    // Opciones específicas para la gráfica por meses
  };

  // Datos y opciones de la gráfica por años
  var dataAnual = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Ultimos 2 años",
        data: [800, 900, 1000, 1100, 1200],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#ff6384ba",
        fill: true,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  var optionsAnual = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Establece el inicio del eje y en 0
      },
    },
    // Opciones específicas para la gráfica por años
  };

  // Datos y opciones de la gráfica de precios históricos
  var dataHistorico = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Todo",
        data: [100, 150, 120, 180, 200],
        backgroundColor: "rgba(26, 199, 60, 0.2)",
        borderColor: "#1ac73cba",
        fill: true,
        borderWidth: 4,
        tension: 0.4,
      },
    ],
  };

  var optionsHistorico = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Establece el inicio del eje y en 0
      },
    },
    // Opciones específicas para la gráfica de precios históricos
  };

  // Función para renderizar la gráfica
  function renderizarGrafica(data, options) {
    if (graficoCanvas.chart) {
      graficoCanvas.chart.destroy();
    }
    graficoCanvas.getContext("2d").clearRect(0, 0, graficoCanvas.width, graficoCanvas.height);
    graficoCanvas.chart = new Chart(graficoCanvas, {
      type: "line",
      data: data,
      options: options,
    });

    var ultimoValor = "";
    if (data === dataDiario) {
      ultimoValor = data.datasets[0].data[data.datasets[0].data.length - 1];
    }

    if (data === dataDiario) {
      document.getElementById("ultimoPrecio").textContent = "$" + ultimoValor;
      document.getElementById("tituloPrecio").textContent = "Precio actual del aguacate hoy $" + ultimoValor;
    }    
  }

  // Evento de clic para mostrar la gráfica de precios históricos
  btnHistorico.addEventListener("click", () => {
    renderizarGrafica(dataHistorico, optionsHistorico);
  });

  // Evento de clic para mostrar la gráfica por semana
  btnSemanal.addEventListener("click", function() {
    renderizarGrafica(dataSemanal, optionsSemanal);
  });

  // Evento de clic para mostrar la gráfica por años
  btnAnual.addEventListener("click", function() {
    renderizarGrafica(dataAnual, optionsAnual);
  });

  // Evento de clic para mostrar la gráfica por meses
  btnMensual.addEventListener("click", function() {
    renderizarGrafica(dataMensual, optionsMensual);
  });

  // Evento de clic para mostrar la gráfica por días
  btnDiario.addEventListener("click", function() {
    renderizarGrafica(dataDiario, optionsDiario);
  });

  /*// Establecer la conexión WebSocket
  var socket = new WebSocket("ws://localhost:8080");

  // Escuchar actualizaciones del servidor
  socket.addEventListener("message", function(event) {
    var data = JSON.parse(event.data);

    // Obtener la etiqueta de tiempo y el valor del precio desde los datos recibidos
    var timestamp = data.timestamp;
    var price = data.price;

    // Agregar los nuevos datos a la gráfica
    dataDiario.labels.push(timestamp);
    dataDiario.datasets[0].data.push(price);

    // Limitar el número de puntos en la gráfica a mostrar
    var maxDataPoints = 8;
    if (dataDiario.labels.length > maxDataPoints) {
      dataDiario.labels.shift();
      dataDiario.datasets[0].data.shift();
    }

    // Actualizar la gráfica con los nuevos datos
    renderizarGrafica(dataDiario, optionsDiario);
  }); */

  // Mostrar la gráfica de precios diario al cargar la página
  renderizarGrafica(dataDiario, optionsDiario);
});

