import {utils} from "./utils.js";


async function init() {

    //Cargamos la navbar y esperamos a que este lista
    await utils.loadNavbar();
    
    //Cargamos el footer
    await utils.loadFooter();

   
    //Iniciamos el reloj
    utils.actualizarRelog();
    setInterval(utils.actualizarRelog, 1000);

   

}




document.addEventListener('DOMContentLoaded', init);



