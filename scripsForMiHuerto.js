const huertasRegistradas = [];

document.getElementById("huertasForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const ubicacion = document.getElementById("ubicacion").value;
    const area = parseInt(document.getElementById("area").value);
    const tipo = document.getElementById("tipo").value;

    const huerta = {
        nombre,
        ubicacion,
        area,
        tipo,
        vendido: false
    };

    huertasRegistradas.push(huerta);
    mostrarHuertasRegistradas();

    // Limpiar el formulario después de registrar la huerta
    document.getElementById("huertasForm").reset();
});

function mostrarHuertasRegistradas() {
    const divHuertas = document.getElementById("huertasRegistradas");
    divHuertas.innerHTML = "";

    for (let i = 0; i < huertasRegistradas.length; i++) {
        const huerta = huertasRegistradas[i];

        const divHuerta = document.createElement("div");
        divHuerta.classList.add("huerta");

        const infoHuerta = document.createElement("p");
        infoHuerta.innerText = `Huerta: ${huerta.nombre}, Ubicación: ${huerta.ubicacion}, Área: ${huerta.area} ha, Tipo de Aguacate: ${huerta.tipo}`;

        const btnVender = document.createElement("button");
        btnVender.innerText = "Vender Aguacate";
        btnVender.addEventListener("click", function () {
            if (!huerta.vendido) {
                huerta.vendido = true;
                alert(`Se vendió la producción de la huerta "${huerta.nombre}"`);
                // Aquí podrías realizar acciones adicionales al vender la producción.
            } else {
                alert("La producción de esta huerta ya fue vendida.");
            }
        });

        divHuerta.appendChild(infoHuerta);
        divHuerta.appendChild(btnVender);
        divHuertas.appendChild(divHuerta);
    }
}

// Mostrar las huertas registradas iniciales (si las hubiera)
mostrarHuertasRegistradas();

