import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

    //Cargamos datos de films and discs
    const notasDeCata =  await utils.fetchMediaData('./data/luma-data.json');
    
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

        await utils.printLog("[LUMA] : cargando perfil LUMA...", terminalBody);
        await utils.printLog("[LUMA] : calentando servidor...", terminalBody, 1600);
        await utils.printLog("[LUMA] : mezclando frontend y backend...", terminalBody, 1800);
        await utils.printLog("[LUMA] : blend full-stack: OK", terminalBody);
        await utils.printLog("[LUMA] : taza completa servida", terminalBody, 1400);
        
        preparadas++;
        displayPreparadas.textContent = preparadas;
        localStorage.setItem('luma_preparadas', preparadas);
   
    });


    btnServir.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';
        
        await utils.printLog("[LUMA] : blend fullstack servido...", terminalBody);
        await utils.printLog("[LUMA] : frontend fresco: OK", terminalBody);
        await utils.printLog("[LUMA] : backend intenso: OK", terminalBody);
        await utils.printLog("[LUMA] : conexion estable: OK", terminalBody);
        await utils.printLog("[LUMA] : experiencia_completa_en_una_taza", terminalBody, 1600);
        servidas++;
        displayServidas.textContent = servidas;
        localStorage.setItem('luma_servidas', servidas);
    
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });



}




document.addEventListener('DOMContentLoaded', init);



