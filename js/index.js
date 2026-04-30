import { utils } from "./utils.js";

// Función para cargar el navbar
async function loadNavbar() {
  const response = await fetch("./navbar.html");
  const text = await response.text();
  document.getElementById("navbar-container").innerHTML = text;
  initializeNavbar(); // Inicializar el navbar después de cargarlo
}

// Función para inicializar el navbar responsive
function initializeNavbar() {
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
}

loadNavbar();
utils.loadFooter();

document.addEventListener("DOMContentLoaded", () => {
  utils.actualizarRelog();
  setInterval(utils.actualizarRelog, 1000);

  const lines = document.querySelectorAll(".hidden-line");
  const typewriterElement = document.getElementById("typewriter-text");
  const cursorLine = document.getElementById("cursor-line");
  const fullText =
    "$ > Transformamos granos de café en algoritmos y bugs en anécdotas.";

  let lineDelay = 0;

  // Mostrar líneas de SYSTEM secuencialmente
  lines.forEach((line, index) => {
    lineDelay = index * 1200; // Delay de 1.2s entre líneas

    setTimeout(() => {
      line.classList.add("show-line"); // Aparece en blanco intenso

      // A los 800ms de haber aparecido, la "apagamos"
      setTimeout(() => {
        line.classList.add("line-faded");
      }, 800);
    }, lineDelay);
  });

  // Efecto máquina de escribir después de las líneas de SYSTEM
  setTimeout(() => {
    let charIndex = 0;

    function typeChar() {
      if (charIndex < fullText.length) {
        typewriterElement.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 50); // Velocidad de escritura
      } else {
        // Cuando termina de escribir, mostrar la línea del cursor
        cursorLine.style.display = "block";
      }
    }

    typeChar();
  }, lineDelay + 1500); // Espera final después de la última línea de SYSTEM

  // Funcionalidad para clics en miembros del equipo
  const teamMembers = document.querySelectorAll("[data-team-member]");
  const profileButtons = document.querySelectorAll(".btn-profile");

  teamMembers.forEach((member) => {
    member.addEventListener("click", (e) => {
      e.preventDefault();
      const memberName = member.textContent.trim();

      // Efecto visual: cambio de color temporal
      member.style.color = "var(--color-acento-secundario)";
      member.style.textShadow = "0 0 10px var(--color-acento-secundario)";

      setTimeout(() => {
        member.style.color = "";
        member.style.textShadow = "";
      }, 1500);
    });
  });

  profileButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // no navegar instantaneamente

      const url = button.getAttribute("href");

      // Efecto visual del botón
      button.style.transform = "scale(0.95)";

      // Navegar despues de un breve retraso para mostrar el efecto
      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  });
});
