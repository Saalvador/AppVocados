
        // Function to show the form and hide the button
        function mostrarFormulario() {
            // Create the HTML content for the form
            const formHTML = `
                <form id="formularioVenta">
                    <h3>Huerta:</h3>
                    
                    <input class="button blink" type="submit" value="Enviar" onclick="playSound('Sounds/Coins.mp3')">
                </form>
            `;

            // Replace the button with the form
            document.getElementById("venderContainer").innerHTML = formHTML;
        }



