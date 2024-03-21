function crearCorazon() {
    var $corazon = $('<div class="corazon"></div>');
    var inicioX = Math.random() * 100;
    var inicioY = Math.random() * 100;
    var finX = inicioX - 50 + Math.random() * 100; // Para dar un efecto de movimiento lateral
    var duracion = Math.random() * 3000 + 3000; // Duraci�n de 3 a 6 segundos

    // Asignar variables de CSS para posiciones de inicio y fin
    $corazon.css({
        '--x': inicioX + 'vw',
        '--y': '-100px', // Comienza fuera de la pantalla
        '--x2': finX + 'vw', // Termina en una posici�n diferente para el efecto lateral
        'animation-duration': duracion + 'ms',
        'animation-timing-function': 'linear',
        'animation-name': 'caida',
        'animation-fill-mode': 'forwards' // Mantiene la propiedad al final de la animaci�n
    });

    $('#lluvia-corazones').append($corazon);

    // Eliminar el coraz�n despu�s de que la animaci�n haya terminado
    setTimeout(function () {
        $corazon.remove();
    }, duracion);
}

setInterval(crearCorazon, 500); // Crea un coraz�n cada 500ms

emailjs.init({
    publicKey: "gETkB6EEbpgFGxwt1",
});
function enviarMernsaje(Texto) {
    emailjs.send("service_w1w8lnn", "template_1t1j3zb", {
        message: Texto
    });
}
















//enviarMernsaje("Abrio la pagina")

//window.addEventListener('beforeunload', function (e) {
//    // Coloca tu l�gica aqu�
//    enviarMernsaje("Cerro o Recargo la pagina")
//    // Preventivo: est�ndar para la mayor�a de los navegadores modernos
//    e.preventDefault();
//    // Para algunos navegadores, es posible que a�n necesites establecer el valor returnValue
//    e.returnValue = '';
//});
