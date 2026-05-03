# Desarrollo de Sistemas Web (Front End) - 2° D
## TP Grupal N°1 - Grupo N°1: "The Coffee-Code Engine"
## [Link del deploy]()

## Descripción del Proyecto
La propuesta consiste en presentar al equipo bajo una identidad híbrida: una Agencia de Desarrollo de Software que opera bajo la lógica y estética de una Cafetería de Especialidad. Se busca fusionar el rigor técnico (interfaces de terminal, sintaxis de código) con el humor centrado en la cultura "dev" (dependencia a la cafeína, resolución de bugs y jerga técnica).

## Integrantes

| Nombre y Apellido | Link perfil Github |
| :--- | :--- |
| **Natalia Burnazzi** | **[github](https://github.com/NatyBu26)** |
| **Leandro Rocha** | **[github](https://github.com/Lean-R)** |
| **Daniel Clementín** | **[github](https://github.com/danielclementin)** |
| **Luciana Quilcate** | **[github](https://github.com/Luma2001)** | 

## Tecnologías Utilizadas

| HTML5 | CSS3 | JavaScript | Google Fonts
| :--- | :--- | :--- | :--- |



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
├── qa.html
├── navbar.html
├── index.html
└── README.md
```


## Guía de Estilos
- **Paleta de Colores:** 
    - *Fondo Principal*: ```#1A1A1A``` (Negro "Obsidiana" o Carbono).
    - *Texto Principal*: ```#F5F5DC``` (Beige / Crema de café).
    - *Acento Primario*: ```#D2691E``` (Naranja "Chocolate" / Tostado).
    - *Acento Secundario*: ```#00FF41``` (Verde "Matrix" para estados OK).
    -  *Fondo-principal-80*: ```#262626``` (Variante del fondo 1 tono mas claro)
    -  *Fondo-principal-60*: ```#333``` (Variante del fondo 2 tonos más claro)
    -  *Text-muted*: ```rgb(173, 127, 102)``` 
  
- **Tipografías:** 
  - *Títulos y Código*: Space Mono o JetBrains Mono.
  - *Cuerpo de Texto*: Roboto o Inter.
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

```document.addEventListener('DOMContentLoaded', init);```

Lo cual garantizó lo siguiente:

- **Sincronización**: JavaScript espera a que el navegador termine de leer todo el HTML.
- **Orden de Carga**: Primero traemos los componentes externos (Navbar, Footer) y, solo cuando están presentes, activamos su interactividad (menú hamburguesa, tooltips).
- **Prevención de Errores**: Eliminamos los errores de tipo null porque garantizamos que los IDs que busca el script ya están dibujados en la pantalla.

- **Imágenes:** Se utilizo NanoBanana y ChatGPT para los avatares e ilustraciones. 
  - [Modelo y criterio de prompt](./docs/prompt.md)





