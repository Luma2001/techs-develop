import { utils } from "./utils.js";

utils.loadNavbar();
utils.loadFooter();

// ============ CUSTOM SELECT PARA EVITAR BUG DE DEVTOOLS ============
function initCustomSelects() {
  const selects = document.querySelectorAll("select.form-input");

  selects.forEach((selectElement) => {
    // Crear contenedor personalizado
    const customSelectContainer = document.createElement("div");
    customSelectContainer.className = "custom-select-container";

    // Crear el elemento que muestra la selección actual
    const customSelectTrigger = document.createElement("div");
    customSelectTrigger.className = "custom-select-trigger";

    // Obtener el texto de la opción seleccionada o el placeholder
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    customSelectTrigger.textContent = selectedOption.text;

    // Crear el dropdown con las opciones
    const customSelectOptions = document.createElement("div");
    customSelectOptions.className = "custom-select-options";

    // Agregar todas las opciones
    Array.from(selectElement.options).forEach((option, index) => {
      const customOption = document.createElement("div");
      customOption.className = "custom-select-option";
      customOption.textContent = option.text;
      customOption.dataset.value = option.value;
      customOption.dataset.index = index;

      // Marcar la opción seleccionada
      if (index === selectElement.selectedIndex) {
        customOption.classList.add("selected");
      }

      // Click en una opción
      customOption.addEventListener("click", (e) => {
        e.stopPropagation();

        // Actualizar el select nativo
        selectElement.selectedIndex = index;

        // Trigger change event para que funcione con validaciones de formulario
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);

        // Actualizar el trigger
        customSelectTrigger.textContent = option.text;

        // Actualizar clases de selected
        customSelectOptions
          .querySelectorAll(".custom-select-option")
          .forEach((opt) => {
            opt.classList.remove("selected");
          });
        customOption.classList.add("selected");

        // Cerrar el dropdown
        customSelectContainer.classList.remove("open");
      });

      customSelectOptions.appendChild(customOption);
    });

    // Toggle dropdown al hacer click en el trigger
    customSelectTrigger.addEventListener("click", (e) => {
      e.stopPropagation();

      // Cerrar otros selects abiertos
      document
        .querySelectorAll(".custom-select-container.open")
        .forEach((container) => {
          if (container !== customSelectContainer) {
            container.classList.remove("open");
          }
        });

      // Toggle este select
      customSelectContainer.classList.toggle("open");
    });

    // Construir el custom select
    customSelectContainer.appendChild(customSelectTrigger);
    customSelectContainer.appendChild(customSelectOptions);

    // Ocultar el select nativo pero mantenerlo funcional
    selectElement.style.display = "none";

    // Insertar el custom select después del select nativo
    selectElement.parentNode.insertBefore(
      customSelectContainer,
      selectElement.nextSibling,
    );
  });

  // Cerrar dropdowns al hacer click fuera
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".custom-select-container.open")
      .forEach((container) => {
        container.classList.remove("open");
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar selects personalizados
  initCustomSelects();
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
