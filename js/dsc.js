import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

    //Cargamos datos de films and discs
    const notasDeCata =  await utils.fetchMediaData('./data/dani-data.json');
    
    //Iniciamos el reloj
    utils.actualizarRelog();
    setInterval(utils.actualizarRelog, 1000);

    

    //Cargamos localStorage
    let preparadas = Number(localStorage.getItem('dani_preparadas')) || 0;
    let servidas = Number(localStorage.getItem('dani_servidas')) || 0;

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


    document.addEventListener('mouseover', (e) => {
        const id = e.target.dataset.id;
        if(id && notasDeCata[id]) {
            utils.toggleTooltip(true, notasDeCata[id], e);
        }

    });

    document.addEventListener('mouseout', (e) => {
        if(e.target.dataset.id) {
            utils.toggleTooltip(false);
        }  
    });         


            
    
    if (!btnPreparar || !btnServir || !modal) return;

    btnPreparar.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';

        await utils.printLog("[DANI] : cargando_perfil_DANI...", terminalBody);
        await utils.printLog("[DANI] : verificando_deploy...", terminalBody, 1600);
        await utils.printLog("[DANI] : revisando_flujo_de_café_y_código...", terminalBody, 1800);
        await utils.printLog("[DANI] : suministro_de_cafeina: OK", terminalBody);
        await utils.printLog("[DANI] : sistema_en_linea", terminalBody, 1400);
        
        preparadas++;
        displayPreparadas.textContent = preparadas;
        localStorage.setItem('dani_preparadas', preparadas);
   
    });


    btnServir.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';
        
        await utils.printLog("[DANI] : activando_barra_online...", terminalBody);
        await utils.printLog("[DANI] : granos_disponibles: OK", terminalBody);
        await utils.printLog("[DANI] : leches_y_vasos: OK", terminalBody);
        await utils.printLog("[DANI] : github_conectado: OK", terminalBody);
        await utils.printLog("[DANI] : flujo_de_codigo_activo: OK", terminalBody);
        await utils.printLog("[DANI] : cafeteria_digital_lista_para_servir", terminalBody, 1600);
        servidas++;
        displayServidas.textContent = servidas;
        localStorage.setItem('dani_servidas', servidas);
    
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });



}




document.addEventListener('DOMContentLoaded', init);



