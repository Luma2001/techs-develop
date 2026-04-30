import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

    //Iniciamos el reloj
    utils.actualizarRelog();
    setInterval(utils.actualizarRelog, 1000);

    //Cargamos localStorage
    let preparadas = Number(localStorage.getItem('luma_preparadas')) || 0;
    let servidas = Number(localStorage.getItem('luma_servidas')) || 0;

    // Referencias a elementos del DOM
    const terminalBody = document.getElementById('terminal-body');
    const modal = document.getElementById('terminal-modal');
    const btnPreparar = document.getElementById('btn-preparar');
    const btnServir = document.getElementById('btn-servir');
    const btnClose = document.getElementById('close-terminal');
    const displayPreparadas = document.getElementById('count-preparadas');
    const displayServidas = document.getElementById('count-servidas');

    //Mostramos los valores guardados en el localStorage
    displayPreparadas.textContent = preparadas;
    displayServidas.textContent = servidas;
        
    
    //const systemTag = document.querySelector('.system-tag');

    if (!btnPreparar || !btnServir || !modal) return;

    btnPreparar.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';

        await utils.printLog("cargando_perfil_luma...", terminalBody);
        await utils.printLog("calentando_servidor...", terminalBody, 600);
        await utils.printLog("mezclando_frontend_y_backend...", terminalBody, 800);
        await utils.printLog("blend full-stack: OK", terminalBody);
        await utils.printLog("taza_completa_servida", terminalBody, 400);
        
        preparadas++;
        displayPreparadas.textContent = preparadas;
        localStorage.setItem('luma_preparadas', preparadas);
   
    });


    btnServir.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';
        
        await utils.printLog("blend fullstack servido...", terminalBody);
        await utils.printLog("frontend fresco: OK", terminalBody);
        await utils.printLog("backend intenso: OK", terminalBody);
        await utils.printLog("conexion estable: OK", terminalBody);
        await utils.printLog("experiencia_completa_en_una_taza", terminalBody, 600);
        servidas++;
        displayServidas.textContent = servidas;
        localStorage.setItem('luma_servidas', servidas);
    
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });





}




document.addEventListener('DOMContentLoaded', init);




// btn.addEventListener('click', () => {
//         // 1. Toggle de la clase que cambia el estado
//         body.classList.toggle('overheated-mode');

//         // 2. Modificar contenido de texto dinámicamente
//         if (body.classList.contains('overheated-mode')) {
//             systemTag.textContent = "SYSTEM_STATUS: OVERHEATED_BY_CAFFEINE";
//             btn.textContent = " >> Detener_Protocolo.sh";
//             console.warn("ALERTA: Niveles de cafeína críticos. El código se compila solo.");
//             alert("ALERTA: Niveles de cafeína críticos. El código se compila solo.⚠️") ;
//         } else {
//             systemTag.textContent = "FULL-STACK_ROASTER_PROFILE_V2.0";
//             btn.textContent = " >> Inyectar_Cafeína.sh";
//             console.log("Sistema estabilizado. Café en niveles normales.");
//             alert("Sistema estabilizado. Café en niveles normales.☕") ;
//         }
//     });