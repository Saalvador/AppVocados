
        // Function to show the form and hide the button
        function mostrarFormulario() {
            // Create the HTML content for the form
            const formHTML = `
                <form id="formularioVenta">
                    <label for="productor">Nombre del Productor:</label>
                    <input type="text" id="productor" required><br>
                    <label for="precio">Precio:</label>
                    <input type="number" id="precio" step="0.01" required><br>
                    <input type="submit" value="Enviar" onclick="playSound('Sounds/Coins.mp3')">
                </form>
            `;

            // Replace the button with the form
            document.getElementById("venderContainer").innerHTML = formHTML;
        }



