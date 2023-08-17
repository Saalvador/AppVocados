document.addEventListener("DOMContentLoaded", function () {
    // Creamos el elemento footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-links">
            <a class="link" href="AboutUs.html#aboutUs">Acerca de Nosotros</a>
            <a class="link" href="AboutUs.html#terms">Términos de Servicio</a>
            <a class="link" href="AboutUs.html#privacy">Política de Privacidad</a>
            <a class="link" href="AboutUs.html#contact">Contacto</a>
            <a class="link" href="AboutUs.html#questions">Preguntas Frecuentes</a>
        </div>
        <div class="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">AppVocado.Org 2023</a>
        </div>
    `;

    // Agregamos el footer al final del cuerpo de la página
    const footerContainer = document.getElementById("footer-container");
    footerContainer.appendChild(footer);
});


