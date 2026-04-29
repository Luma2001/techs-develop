// Función para cargar el navbar
async function loadNavbar() {
  const response = await fetch("./navbar.html");
  const text = await response.text();
  document.getElementById("navbar-container").innerHTML = text;
}

loadNavbar();

document.addEventListener("DOMContentLoaded", () => {
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
});
