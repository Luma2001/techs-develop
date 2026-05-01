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

    fetchMediaData: async function(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('No se pudo tostar el JSON');
            const data = await response.json();
            return data.media;
        } catch (error) {
            console.error('Error al cargar el JSON:', error);
            return [];      
        } 
    },

    toggleTooltip: function(isVisible, data = null, e = null) {
        const tooltip = document.getElementById('barista-tooltip');
        if (!tooltip) return;

        if (isVisible && data && e) {
            tooltip.innerHTML = `
                <img src="${data.image}" alt="Portada" class="tooltip-img">
                <p class="tooltip-text">${data.text}</p>
            `;
            tooltip.style.display = 'flex';

            const offsetX = 20; 
            const offsetY = -200;
            
            // Usamos las coordenadas del evento 'e' que viene del mouse
            tooltip.style.left = `${e.pageX + offsetX}px`;
            tooltip.style.top = `${e.pageY + offsetY}px`;
        } else {
            // Si no es visible o no hay evento, lo ocultamos
            tooltip.style.display = 'none';
            tooltip.innerHTML = '';
        }
    }
}

