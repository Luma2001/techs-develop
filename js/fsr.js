document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('caffeine-btn');
    const body = document.body;
    const systemTag = document.querySelector('.system-tag');

    btn.addEventListener('click', () => {
        // 1. Toggle de la clase que cambia el estado
        body.classList.toggle('overheated-mode');

        // 2. Modificar contenido de texto dinámicamente
        if (body.classList.contains('overheated-mode')) {
            systemTag.textContent = "SYSTEM_STATUS: OVERHEATED_BY_CAFFEINE";
            btn.textContent = " >> Detener_Protocolo.sh";
            console.warn("ALERTA: Niveles de cafeína críticos. El código se compila solo.");
            alert("ALERTA: Niveles de cafeína críticos. El código se compila solo.⚠️") ;
        } else {
            systemTag.textContent = "FULL-STACK_ROASTER_PROFILE_V2.0";
            btn.textContent = " >> Inyectar_Cafeína.sh";
            console.log("Sistema estabilizado. Café en niveles normales.");
            alert("Sistema estabilizado. Café en niveles normales.☕") ;
        }
    });
});