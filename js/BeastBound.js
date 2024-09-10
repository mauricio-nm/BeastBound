let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonOscuridad = document.getElementById('boton-oscuridad')
    botonOscuridad.addEventListener('click', ataqueOscuridad)
    let botonLuz = document.getElementById('boton-luz')
    botonLuz.addEventListener('click', ataqueLuz)
    let botonViento = document.getElementById('boton-viento')
    botonViento.addEventListener('click', ataqueViento)

}

function seleccionarMascotaJugador() {
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

    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' y la mascota del enemigo atacó con ' + ataqueEnemigo + ' = RESULTADO'
    sectionMensajes.appendChild(parrafo)
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)