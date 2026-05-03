import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

    //Cargamos datos de films and discs
    const notasDeCata =  await utils.fetchMediaData('./data/naty-data.json');
    
    //Iniciamos el reloj
    utils.actualizarRelog();
    setInterval(utils.actualizarRelog, 1000);

    //llamamos a la función para cargar los enlaces del equipo
    await utils.renderOtrosMiembros('naty');
    

    //Cargamos localStorage
    let probadas = Number(localStorage.getItem('naty_probadas')) || 0;
    let revisados = Number(localStorage.getItem('naty_revisados')) || 0;

    // Referencias a elementos del DOM
    const terminalBody = document.getElementById('terminal-body');
    const modal = document.getElementById('terminal-modal');
    const btnPreparar = document.getElementById('btn-preparar');
    const btnServir = document.getElementById('btn-servir');
    const btnClose = document.getElementById('close-terminal');
    const displayProbadas = document.getElementById('count-probadas');
    const displayRevisados = document.getElementById('count-revisados');

    //Mostramos los valores guardados en el localStorage
    displayProbadas.textContent = probadas;
    displayRevisados.textContent = revisados;


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

        await utils.printLog("[NATY] : cargando perfil QA...", terminalBody);
        await utils.printLog("[NATY] : verificando interfaz...", terminalBody, 1600);
        await utils.printLog("[NATY] : espuma visual: OK", terminalBody, 1800);
        await utils.printLog("[NATY] : bugs amargos: en revisión", terminalBody);
        await utils.printLog("[NATY] : perfil servido sin errores", terminalBody, 1400);
        
        probadas++;
        displayProbadas.textContent = probadas;
        localStorage.setItem('naty_probadas', probadas);
   
    });


    btnServir.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';
        
        await utils.printLog("[NATY] : latte frontend servido...", terminalBody);
        await utils.printLog("[NATY] : HTML semántico: OK", terminalBody);
        await utils.printLog("[NATY] : CSS espumoso: OK", terminalBody);
        await utils.printLog("[NATY] : JS activo: OK", terminalBody);
        await utils.printLog("[NATY] : interfaz clara, cálida y sin bugs amargos", terminalBody, 1600);
        revisados++;
        displayRevisados.textContent = revisados;
        localStorage.setItem('naty_revisados', revisados);
    
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });



}




document.addEventListener('DOMContentLoaded', init);



