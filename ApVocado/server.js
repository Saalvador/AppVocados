const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Manejar conexiones de clientes
wss.on('connection', function connection(ws) {
  // Enviar actualizaciones de precios en intervalos regulares (este es solo un ejemplo)
  setInterval(function () {
    const price = 20; // Obtén el precio actual de alguna manera
    const timestamp = new Date().getTime(); // Obtén la marca de tiempo actual

    const data = JSON.stringify({ timestamp, price });
    ws.send(data);
  }, 5000); // Envía una actualización cada 5 segundos (ajusta esto según tus necesidades)
});

/* const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Manejar conexiones de clientes
wss.on('connection', function connection(ws) {
  // Enviar actualizaciones de precios en intervalos regulares (este es solo un ejemplo)
  setInterval(function () {
    const price = 28; // Actualiza el precio deseado
    const timestamp = new Date().getTime(); // Obtén la marca de tiempo actual

    const data = JSON.stringify({ timestamp, price });
    ws.send(data);
  }, 5000); // Envía una actualización cada 5 segundos (ajusta esto según tus necesidades)
});*/
