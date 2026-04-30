export const utils = {
    actualizarRelog(){
        const contenedorHora = document.getElementById('current-time');
        if(!contenedorHora) return;

        const ahora = new Date();
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        contenedorHora.textContent = `${horas}:${minutos}:${segundos}`;
    },

    loadNavbar: async function() {
        const response = await fetch("./navbar.html");
        const text = await response.text();
        document.getElementById("navbar-container").innerHTML = text;
    },

    loadFooter: async function() {
        const response = await fetch("./footer.html");
        const text = await response.text();
        document.getElementById("footer-container").innerHTML = text;
    },

    printLog: async function(message, targetElement,delay = 500) {
        
        if (!targetElement) {
            console.error("Error: No se proporcionó un elemento de destino para el log.");
            return;
        }
                
        const p = document.createElement('p');
        p.textContent = `> ${message}`;
        targetElement.appendChild(p);
        
        targetElement.scrollTop = targetElement.scrollHeight;

        return new Promise(resolve => setTimeout(resolve, delay));
    },
}

