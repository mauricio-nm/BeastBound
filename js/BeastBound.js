const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarReinicio = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonOscuridad = document.getElementById('boton-oscuridad')
const botonLuz = document.getElementById('boton-luz')
const botonViento = document.getElementById('boton-viento')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigos = document.getElementById("vidas-enemigos")

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')


let beasts = []
let ataqueJugador
let ataqueEnemigo
let opcionDeBeasts
let inputZorbat
let inputLuminaut
let inputDraconix
let vidasJugador = 3
let vidasEnemigo = 3

class Beast {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let zorbat = new Beast('Zorbat', './assets/zorbat.png', 3)

let luminaut = new Beast('Luminaut', './assets/luminaut.png', 3)

let draconix = new Beast('Draconix', './assets/draconix.png', 3)


zorbat.ataques.push(
    { nombre: 'Oscuridad 🌑', id: 'boton-oscuridad' },
    { nombre: 'Oscuridad 🌑', id: 'boton-oscuridad' },
    { nombre: 'Oscuridad 🌑', id: 'boton-oscuridad' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
)

luminaut.ataques.push(
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Oscuridad 🌑', id: 'boton-oscuridad' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
)

draconix.ataques.push(
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Oscuridad 🌑', id: 'boton-oscuridad' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
)

beasts.push(zorbat,luminaut,draconix)


function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = 'none'

    beasts.forEach((beast) => {
        opcionDeBeasts = `
            <input type="radio" name = "mascota" id=${beast.nombre} />
            <label class="tarjeta-de-beast" for=${beast.nombre}>
                <p>${beast.nombre}</p>
                <img src="${beast.foto}" alt=${beast.nombre}>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeBeasts

        inputZorbat = document.getElementById('Zorbat')
        inputLuminaut = document.getElementById('Luminaut')
        inputDraconix = document.getElementById('Draconix')
    })

    sectionSeleccionarReinicio.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonOscuridad.addEventListener('click', ataqueOscuridad)
    botonLuz.addEventListener('click', ataqueLuz)
    botonViento.addEventListener('click', ataqueViento)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

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

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){

    sectionMensajes.innerHTML = resultadoFinal

    botonOscuridad.disabled = true
    botonLuz.disabled = true
    botonViento.disabled = true

    sectionSeleccionarReinicio.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)