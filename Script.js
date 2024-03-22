

var bienvenida = $('#bienvenida')
bienvenida.hide()
var DivNo = $('#DivNo')
DivNo.hide()
var DivSi = $('#DivSi')
DivSi.hide()
var ContentSi = $('#ContentSi')
ContentSi.hide()



var mensajehabilitado = 0;

var ua = navigator.userAgent;

if (/iPhone/i.test(ua)) {
    enviarMernsaje("Este dispositivo es un iPhone.");
} else if (/Android/i.test(ua)) {
    enviarMernsaje("Este dispositivo es Android.");
} else if (/iPad/i.test(ua)) {
    enviarMernsaje("Este dispositivo es un iPad.");
} else if (/Windows Phone/i.test(ua)) {
    enviarMernsaje("Este dispositivo es un Windows Phone.");
} else {
    enviarMernsaje("No se ha podido determinar el tipo de dispositivo m�vil.");
}

//document.getElementById('sobre').addEventListener('click', function () {
//    this.classList.add('abierto'); // A�ade la clase para "abrir" el sobre
//    setTimeout(function () {
//        document.getElementById('sobre').style.display = 'none'; // Oculta el sobre
//        bienvenida.show(1000)

//    }, 500); // El tiempo debe coincidir con la duraci�n de la transici�n CSS
//});
document.getElementById('sobre').addEventListener('click', function () {
    this.classList.add('abierto');
    setTimeout(function () {
        document.getElementById('sobre').style.display = 'none';
        bienvenida.show(1000)
    }, 500); // Coincide con la duraci�n de la transici�n
});

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

var intervaloCorazones = setInterval(crearCorazon, 500); // Crea un coraz�n cada 500ms
setTimeout(function () {
    clearInterval(intervaloCorazones);
}, 10000);

emailjs.init({
    publicKey: "gETkB6EEbpgFGxwt1",
});
function enviarMernsaje(Texto) {
    if (mensajehabilitado > 0) {
        emailjs.send("service_w1w8lnn", "template_1t1j3zb", {
            message: Texto
        });
    } else {
        console.log(Texto)
    }
}


document.getElementById('botonSi').addEventListener('click', function () {
    this.classList.add('active', 'boton-brillante');

    setTimeout(() => {
        this.classList.remove('active');
    }, 400); // Coincide con la duraci�n de la animaci�n CSS
});
Cerrar = function (msj) {
    enviarMernsaje(msj);
    $("#ContenidoTotal").hide(1000)
    $("#DivNo").show(1000)

}

ClickSi = function () {
    enviarMernsaje('Dijo si en la primer Pregunta');
    $("#bienvenida").fadeOut(1000, function () {
        $("#DivSi").fadeIn(2000, function () { $("#ContentSi").fadeIn(1000); $("#ContentSi").fadeIn(1000); });

    });
}
ClickSi2 = function () {
    enviarMernsaje('Dijo si en la segunda Pregunta');
    $("#DivSi").fadeOut(1000)
    $("#ContentSi").fadeOut(1000, function () {
        $("#recorrido2").fadeIn(1000);
    });

}

EmpezarReocrrido = function () {
    enviarMernsaje('Dijo si a empezar recorrido');
    $("#recorrido2").fadeOut(1000, function () {

        $("#inicio").fadeIn(1000, function () {
            $("#inicio").fadeOut(1000, function () {
                $("#recuerdos").fadeIn(1000)
            })
        });

    });
    document.body.classList.toggle('nuevo-fondo');
}

var indiceSlideActual = 1;
mostrarSlide(indiceSlideActual);

function moverSlide(n) {
    $(".slide").hide()
    var slides = $(".slide");
    var numeroDeSlides = slides.length;
    // Incrementa o decrementa el �ndice del slide actual
    indiceSlideActual += n;
    if (indiceSlideActual > numeroDeSlides) {
        indiceSlideActual = 1;
    } else if (indiceSlideActual < 1) {
        indiceSlideActual = numeroDeSlides;
    }
    // Muestra el nuevo slide
    slides.eq(indiceSlideActual - 1).fadeIn(1000);
    //var slides = $(".slide");
    //var numeroDeSlides = slides.length;
    //slides.eq(indiceSlideActual - 1).fadeOut(1000, function () {
    //    // Incrementa o decrementa el �ndice del slide actual
    //    indiceSlideActual += n;
    //    if (indiceSlideActual > numeroDeSlides) {
    //        indiceSlideActual = 1;
    //    } else if (indiceSlideActual < 1) {
    //        indiceSlideActual = numeroDeSlides;
    //    }
    //    // Muestra el nuevo slide
    //    slides.eq(indiceSlideActual - 1).fadeIn(1000);
    //});
}

function mostrarSlide(n) {
    var slides = $(".slide");
    slides.hide(); // Oculta todos los slides
    slides.eq(n - 1).fadeIn(500); // Muestra el slide deseado con una transici�n suave
}


//EmpezarReocrrido()
//$('#sobre').hide()