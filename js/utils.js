export const utils = {
    initializeNavbar: function() {
        const hamburgerMenu = document.getElementById("hamburger-menu");
        const navMenu = document.getElementById("nav-menu");
        const navLinks = document.querySelectorAll(".nav-links a");

        if (hamburgerMenu) {
            hamburgerMenu.addEventListener("click", () => {
                hamburgerMenu.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            // Cerrar el menú cuando se hace click en un link
            navLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    hamburgerMenu.classList.remove("active");
                    navMenu.classList.remove("active");
                });
            });

            // Cerrar el menú cuando se hace click fuera
            document.addEventListener("click", (e) => {
                if (
                    !e.target.closest(".os-navbar") &&
                    hamburgerMenu.classList.contains("active")
                ) {
                    hamburgerMenu.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            });
        }
    },//fin initializeNavbar

    actualizarRelog(){
        const contenedorHora = document.getElementById('current-time');
        if(!contenedorHora) return;

        const ahora = new Date();
        const horas = String(ahora.getHours()).padStart(2, '0');
        const minutos = String(ahora.getMinutes()).padStart(2, '0');
        const segundos = String(ahora.getSeconds()).padStart(2, '0');
        contenedorHora.textContent = `${horas}:${minutos}:${segundos}`;
    },//fin actualizarRelog

    loadNavbar: async function() {
        const response = await fetch("./navbar.html");
        const text = await response.text();
        document.getElementById("navbar-container").innerHTML = text;
        this.initializeNavbar(); // Inicializar el navbar después de cargarlo
    },//fin loadNavbar

    loadFooter: async function() {
        const response = await fetch("./footer.html");
        const text = await response.text();
        document.getElementById("footer-container").innerHTML = text;
    },//fin loadFooter

    printLog: async function(message, targetElement,delay = 1000) {
        
        if (!targetElement) {
            console.error("Error: No se proporcionó un elemento de destino para el log.");
            return;
        }
                
        const p = document.createElement('p');
        p.textContent = `> ${message}`;
        targetElement.appendChild(p);
        
        targetElement.scrollTop = targetElement.scrollHeight;

        return new Promise(resolve => setTimeout(resolve, delay));
    },//fin printLog

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
    },//fin fetchMediaData

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
    },//fin toggleTooltip



}//fin utils

