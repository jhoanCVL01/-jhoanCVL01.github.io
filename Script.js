

var bienvenida = $('#bienvenida')
bienvenida.hide()
var DivNo = $('#DivNo')
DivNo.hide()
var DivSi = $('#DivSi')
DivSi.hide()
var ContentSi = $('#ContentSi')
ContentSi.hide()
$('#sfd2').hide()


var mensajehabilitado = 1;



//document.getElementById('sobre').addEventListener('click', function () {
//    this.classList.add('abierto'); // Añade la clase para "abrir" el sobre
//    setTimeout(function () {
//        document.getElementById('sobre').style.display = 'none'; // Oculta el sobre
//        bienvenida.show(1000)

//    }, 500); // El tiempo debe coincidir con la duración de la transición CSS
//});
document.getElementById('sobre').addEventListener('click', function () {
    this.classList.add('abierto');
    setTimeout(function () {
        document.getElementById('sobre').style.display = 'none';
        bienvenida.show(1000)
    }, 500); // Coincide con la duración de la transición
});

function crearCorazon() {
    var $corazon = $('<div class="corazon"></div>');
    var inicioX = Math.random() * 100;
    var inicioY = Math.random() * 100;
    var finX = inicioX - 50 + Math.random() * 100; // Para dar un efecto de movimiento lateral
    var duracion = Math.random() * 3000 + 3000; // Duración de 3 a 6 segundos

    // Asignar variables de CSS para posiciones de inicio y fin
    $corazon.css({
        '--x': inicioX + 'vw',
        '--y': '-100px', // Comienza fuera de la pantalla
        '--x2': finX + 'vw', // Termina en una posición diferente para el efecto lateral
        'animation-duration': duracion + 'ms',
        'animation-timing-function': 'linear',
        'animation-name': 'caida',
        'animation-fill-mode': 'forwards' // Mantiene la propiedad al final de la animación
    });

    $('#lluvia-corazones').append($corazon);

    // Eliminar el corazón después de que la animación haya terminado
    setTimeout(function () {
        $corazon.remove();
    }, duracion);
}

var intervaloCorazones = setInterval(crearCorazon, 500); // Crea un corazón cada 500ms
setTimeout(function () {
    clearInterval(intervaloCorazones);
}, 10000);

emailjs.init({
    publicKey: "gETkB6EEbpgFGxwt1",
});
function enviarMernsaje(Texto) {
    if (mensajehabilitado > 0) {
        emailjs.send("service_vvngnly", "template_1t1j3zb", {
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
    }, 400); // Coincide con la duración de la animación CSS
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
            $("#inicio").fadeOut(3000, function () {
                $("#recuerdos").fadeIn(1000)
            })
        });

    });
    document.body.classList.toggle('nuevo-fondo');
}

var indiceSlideActual = 1;
mostrarSlide(indiceSlideActual);

function moverSlide(n) {
    var slides = $(".slide");
    var numeroDeSlides = slides.length;
    if (!((indiceSlideActual + n) > numeroDeSlides) && (indiceSlideActual + n) > 0) {
        $(".slide").hide()
        // Incrementa o decrementa el índice del slide actual
        indiceSlideActual += n;
        if (indiceSlideActual < 1) {
            indiceSlideActual = numeroDeSlides;
        }
        // Muestra el nuevo slide
        slides.eq(indiceSlideActual - 1).fadeIn(1000);
    }

    //var slides = $(".slide");
    //var numeroDeSlides = slides.length;
    //slides.eq(indiceSlideActual - 1).fadeOut(1000, function () {
    //    // Incrementa o decrementa el índice del slide actual
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
    slides.eq(n - 1).fadeIn(500); // Muestra el slide deseado con una transición suave
}

function Verrazones() {
    enviarMernsaje('Descargo las razones');
    window.location.href = 'docs/50Razones.docx';
}

function cuandoEsVisible() {
    enviarMernsaje('LLego a la ultima division');
    $('#botonNoquiero').hide()
    // Aquí tu lógica cuando el div es visible
}

function cuandoNoEsVisible() {
    $('#botonNoquiero').show()
    // Aquí tu lógica cuando el div deja de ser visible
}

let options = {
    root: null, // Observa cambios en la visibilidad dentro del viewport
    threshold: 0.1 // El callback se ejecutará cuando el 10% del elemento esté visible
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // El div es visible
            cuandoEsVisible();
        } else {
            // El div no es visible
            cuandoNoEsVisible();
        }
    });
}, options);

let target = document.getElementById("SlideFinal");
observer.observe(target);

function SeccionFinal() {
    setInterval(crearCorazon, 500);
    $("#recuerdos").fadeOut(1000, function () {
        $("#MensajeFinal").fadeIn(1000)
    })

    document.body.classList.toggle('nuevo-fondo2');

}

function RespuestaAcepto() {
    enviarMernsaje('Respintio con un si intenemoslo');
    $("#sfd2").fadeOut(1000, function () {
        $("#RespuestaAcepto").fadeIn(1000)
        $('#botonatras').show()
    })

    
}
function RespuestoNoAcepto() {
    enviarMernsaje('Respintio con un no intenemoslo');
    $("#sfd2").fadeOut(1000, function () {
        $("#RespuestaNoAcepto").fadeIn(1000)
        $('#botonatras').show()
    })
}
function RespuestaHablemos() {
    enviarMernsaje('Respintio con un hablemoslo');
    $("#sfd2").fadeOut(1000, function () {
        $("#RespuestaHablemos").fadeIn(1000)
        $('#botonatras').show()
    })
}
////EmpezarReocrrido()
//SeccionFinal()
//$('#sobre').hide()

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
    enviarMernsaje("No se ha podido determinar el tipo de dispositivo móvil.");
}
var fechaFinal = new Date("Mar 28, 2024 00:00:00").getTime();

// Actualiza la cuenta cada segundo
var x = setInterval(function () {

    // Obtiene la fecha y hora actuales
    var ahora = new Date().getTime();

    // Encuentra la distancia entre ahora y la fecha de finalización
    var distancia = fechaFinal - ahora;

    // Calcula días, horas, minutos y segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id="temporizador"
    document.getElementById("temporizador").innerHTML = dias + "d " + horas + "h "
        + minutos + "m " + segundos + "s ";

    // Si la cuenta regresiva termina, muestra un texto
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("temporizador").innerHTML = "EXPIRADO";
    }
}, 1000);