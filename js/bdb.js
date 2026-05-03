import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

    //Cargamos datos de films and discs
    const notasDeCata =  await utils.fetchMediaData('./data/lean-data.json');
    
    //Iniciamos el reloj
    utils.actualizarRelog();
    setInterval(utils.actualizarRelog, 1000);

    //llamamos a la función para cargar los enlaces del equipo
    await utils.renderOtrosMiembros('lean');

    //Cargamos localStorage
    let preparadas = Number(localStorage.getItem('lean_preparadas')) || 0;
    let servidas = Number(localStorage.getItem('lean_servidas')) || 0;

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

        await utils.printLog("[LEAN] : cargando perfil LEAN...", terminalBody);
        await utils.printLog("[LEAN] : conectando_base_de_datos...", terminalBody, 1600);
        await utils.printLog("[LEAN] : filtrando_tecnologías...", terminalBody, 1800);
        await utils.printLog("[LEAN] : backend_estable: OK", terminalBody);
        await utils.printLog("[LEAN] : espresso_backend_servido", terminalBody, 1400);
        
        preparadas++;
        displayPreparadas.textContent = preparadas;
        localStorage.setItem('lean_preparadas', preparadas);
   
    });


    btnServir.addEventListener('click', async () => {
        terminalBody.innerHTML = ''; 
        modal.style.display = 'flex';
        
        await utils.printLog("[LEAN] : espresso_backend_servido...", terminalBody);
        await utils.printLog("[LEAN] : datos_filtrados: OK", terminalBody);
        await utils.printLog("[LEAN] : rutas_conectadas: OK", terminalBody);
        await utils.printLog("[LEAN] : logica_interna: OK", terminalBody);
        await utils.printLog("[LEAN] : sistema_fuerte_y_sin_tostado_excesivo", terminalBody, 1600);
        servidas++;
        displayServidas.textContent = servidas;
        localStorage.setItem('lean_servidas', servidas);
    
    });

    btnClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });



}




document.addEventListener('DOMContentLoaded', init);



