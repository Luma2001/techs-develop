// Función para cargar el navbar
async function loadNavbar() {
  const response = await fetch("./navbar.html");
  const text = await response.text();
  document.getElementById("navbar-container").innerHTML = text;
}

loadNavbar();
