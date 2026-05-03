# Desarrollo de Sistemas Web (Front End) - 2° D

## TP Grupal N°1 - Grupo N°1: "The Coffee-Code Engine"

## [Link del deploy](https://the-coffee-code-engine.vercel.app/)

## Descripción del Proyecto

La propuesta consiste en presentar al equipo bajo una identidad híbrida: una Agencia de Desarrollo de Software que opera bajo la lógica y estética de una Cafetería de Especialidad. Se busca fusionar el rigor técnico (interfaces de terminal, sintaxis de código) con el humor centrado en la cultura "dev" (dependencia a la cafeína, resolución de bugs y jerga técnica).

## Objetivo

Presentar la Agencia de Desarrollo de Software 'The Coffe-Code Engine', con una estética moderna y atractiva, fusionando la tecnología con la estética de una cafetería de especialidad.

## Funcionalidades Básicas

- `index.html`: Objetivo: presentar la empresa e introducir sobre cada integrante del equipo
  - Sección `hero`: Sección destacada que presenta la empresa e incorpora un CTO (Llamado a la acción), invitando al visitante a contactarse
  - Sección `brewing`: Descripción del proceso de elaboración del mejor software con temática de cafetería
  - Sección `source`: Presentación de los miembros del equipo, como baristas-devs
  - Sección `terminal`: Formulario de contacto
- Fichas individuales: Fichas de presentación de los diferentes miembros del equipo con información detallada. Accesible desde la sección `source` de `index.html`
- Bitácora: Registro detallado de decisiones y dificultades transcurridas durante la duración del proyecto

## Integrantes

| Nombre y Apellido    | Link perfil Github                               |
| :------------------- | :----------------------------------------------- |
| **Natalia Burnazzi** | **[github](https://github.com/NatyBu26)**        |
| **Leandro Rocha**    | **[github](https://github.com/Lean-R)**          |
| **Daniel Clementín** | **[github](https://github.com/danielclementin)** |
| **Luciana Quilcate** | **[github](https://github.com/Luma2001)**        |

## Tecnologías Utilizadas

| HTML5 | CSS3 | JavaScript | Google Fonts |
| :---- | :--- | :--------- | :----------- |

## Estructura de Archivos

```
.
├── css/
│   ├── styles.css
│   ├── footer.css
│   ├── fsr.css
│   ├── index.css
│   └── nav.css
├── data/
│   ├── dany-data.json
│   ├── lean-data.json
│   ├── luma-data.json
│   └── naty-data.json
├── img/
├── js/
│   ├── utils.js
│   ├── fsr.js
│   └── index.js
├── footer.html
├── full-stack-roaster.html
├── qa-taster-frontend-latte-artist.html
├── navbar.html
├── index.html
└── README.md
```

## Guía de Estilos

- **Paleta de Colores:**
  - _Fondo Principal_: `#1A1A1A` (Negro "Obsidiana" o Carbono).
  - _Texto Principal_: `#F5F5DC` (Beige / Crema de café).
  - _Acento Primario_: `#D2691E` (Naranja "Chocolate" / Tostado).
  - _Acento Secundario_: `#00FF41` (Verde "Matrix" para estados OK).
  - _Fondo-principal-80_: `#262626` (Variante del fondo 1 tono mas claro)
  - _Fondo-principal-60_: `#333` (Variante del fondo 2 tonos más claro)
  - _Text-muted_: `rgb(173, 127, 102)`
- **Tipografías:**
  - _Títulos y Código_: Space Mono o JetBrains Mono.
  - _Cuerpo de Texto_: Roboto o Inter.
- **Iconografía:** Librería utilizada Tabler Icons: [Link al CDN](https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css)

- **Avatares:** Se decide el uso de avatares/IA
  para privacidad.

## JavaScript

- [Funciones dinámicas utilizadas en las páginas](./docs/funcionesJS.md)

Descripción breve de cada una de las funciones utilizadas en el proyecto, incluye capturas de pantalla.

## Uso de IA

A continuación se detalla las herramientas de Inteligencia Artificial utilizadas en el proceso:

### Herramientas:

Listado de aplicaciones y modelos usados:

- Gemini,
- ChatGPT,
- NanoBanana.

### Uso en Contenido y Código:

Utilizamos un Agente creado en **GEMINI** que cumple el rol de capacitador en programación, cuya finalidad es ayudarnos a aprender y comprender lo que estamos codificando.

El principal problema de lógica que se presentó fue al intentar llamar elementos que aún el sistema no renderizaba. Para lo cual nos sugerió el uso de una función que llamamos init dentro de un escuchador de eventos.

`document.addEventListener('DOMContentLoaded', init);`

Lo cual garantizó lo siguiente:

- **Sincronización**: JavaScript espera a que el navegador termine de leer todo el HTML.
- **Orden de Carga**: Primero traemos los componentes externos (Navbar, Footer) y, solo cuando están presentes, activamos su interactividad (menú hamburguesa, tooltips).
- **Prevención de Errores**: Eliminamos los errores de tipo null porque garantizamos que los IDs que busca el script ya están dibujados en la pantalla.

### Uso en recursos visuales

Avatares: Se utilizó IA para generar los avatares de los integrantes. El objetivo fue construir una estética visual coherente con la identidad general de The Coffee-Code Engine, combinando el universo de la cafetería de especialidad con el mundo del desarrollo web.

Para ello se trabajó con prompts orientados a generar ilustraciones de estilo caricatura digital/3D, manteniendo ciertos rasgos de cada integrante y sumando elementos representativos del proyecto, como delantales de barista, tazas, notebooks, herramientas tecnológicas y detalles vinculados al café.

Las imágenes generadas por IA fueron luego seleccionadas, revisadas y ajustadas por el equipo para asegurar coherencia visual entre los perfiles.

Herramientas utilizadas: ChatGPT y NanoBanana

Logo: Se utilizó IA para generar propuestas visuales del logo del proyecto, buscando representar la unión entre café y programación mediante un grano de café enmarcado por signos de código < >, con una estética simple, moderna y coherente con la identidad visual general.

Herramientas utilizadas: ChatGPT

Notas de cata para películas y discos: Se utilizó IA para generar ideas de textos breves para las secciones de películas y discos. El objetivo fue crear descripciones con formato de “notas de cata”, relacionando cada obra con el mundo del café y con la estética dev del proyecto.

Luego, los textos fueron revisados y adaptados por el equipo para que mantuvieran coherencia con cada perfil y con el tono general de la propuesta.

Herramientas utilizadas: ChatGPT

Los prompts base utilizados para avatares, logo y notas de cata se documentan en [prompt.md](./docs/prompt.md).

### Imágenes:

Se utilizo NanoBanana y ChatGPT para los avatares e ilustraciones.

- [Modelo y criterio de prompt](./docs/prompt.md)
