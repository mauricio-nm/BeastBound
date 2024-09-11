let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionSeleccionarReinicio = document.getElementById('reiniciar')
    sectionSeleccionarReinicio.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonOscuridad = document.getElementById('boton-oscuridad')
    botonOscuridad.addEventListener('click', ataqueOscuridad)
    let botonLuz = document.getElementById('boton-luz')
    botonLuz.addEventListener('click', ataqueLuz)
    let botonViento = document.getElementById('boton-viento')
    botonViento.addEventListener('click', ataqueViento)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputZorbat = document.getElementById('zorbat')
    let inputLuminaut = document.getElementById('luminaut')
    let inputDraconix = document.getElementById('draconix')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if( inputZorbat.checked ) {
        spanMascotaJugador.innerHTML = 'Zorbat'
    } else if ( inputLuminaut.checked) {
        spanMascotaJugador.innerHTML = 'Luminaut'
    } else if ( inputDraconix.checked) {
        spanMascotaJugador.innerHTML = 'Draconix'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Zorbat'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Luminaut'
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Draconix'
    }
}

function ataqueOscuridad() {
    ataqueJugador = 'OSCURIDAD'
    ataqueAleatorioEnemigo()
}

function ataqueLuz() {
    ataqueJugador = 'LUZ'
    ataqueAleatorioEnemigo()
}

function ataqueViento() {
    ataqueJugador = 'VIENTO'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'OSCURIDAD'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'LUZ'
    } else {
        ataqueEnemigo = 'VIENTO'
    }

    combate()
}

function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigos = document.getElementById("vidas-enemigos")
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'OSCURIDAD' && ataqueEnemigo == 'VIENTO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigos.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'LUZ' && ataqueEnemigo == 'OSCURIDAD') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigos.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'VIENTO' && ataqueEnemigo == 'LUZ') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigos.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal('FELICITACIONES! Ganaste :D')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO, PERDISTE :(')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' y la mascota del enemigo atacó con ' + ataqueEnemigo + ' = ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonOscuridad = document.getElementById('boton-oscuridad')
    botonOscuridad.disabled = true
    let botonLuz = document.getElementById('boton-luz')
    botonLuz.disabled = true
    let botonViento = document.getElementById('boton-viento')
    botonViento.disabled = true

    let sectionSeleccionarReinicio = document.getElementById('reiniciar')
    sectionSeleccionarReinicio.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)