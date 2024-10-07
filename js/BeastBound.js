const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarReinicio = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionSeleccionarReinicio.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVictoriasJugador = document.getElementById("victorias-jugador")
const spanVictoriasEnemigos = document.getElementById("victorias-enemigos")

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let beasts = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeBeasts
let inputZorbat
let inputLuminaut
let inputDraconix
let inputBosstiff
let inputZoidon
let inputLionex
let mascotaJugador
let ataquesBeast
let ataquesBeastEnemigo
let botonTinieblas
let botonLuz
let botonViento
let botonTierra
let botonArtificial
let botonFuego
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Beast {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
    }
}

let zorbat = new Beast('Zorbat', './assets/zorbat.png', 5, 'Oscuridad')

let luminaut = new Beast('Luminaut', './assets/luminaut.png', 5, 'Luz')

let draconix = new Beast('Draconix', './assets/draconix.png', 5, 'Viento')

let bosstiff = new Beast('Bosstiff', './assets/bosstiff.png', 5, 'Tierra')

let zoidon = new Beast('Zoidon', './assets/zoidon.png', 5, 'Artificial')

let lionex = new Beast('Lionex', './assets/lionex.png', 5, 'Fuego')


zorbat.ataques.push(
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
)

luminaut.ataques.push(
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
)

draconix.ataques.push(
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
)

bosstiff.ataques.push(
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' }
)

zoidon.ataques.push(
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' }
)

lionex.ataques.push(
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Luz ☀️', id: 'boton-luz' }
)


beasts.push(zorbat,luminaut,draconix,bosstiff,lionex,zoidon)


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
        inputBosstiff = document.getElementById ('Bosstiff')
        inputZoidon = document.getElementById ('Zoidon')
        inputLionex = document.getElementById ('Lionex')

    })



    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'

    if( inputZorbat.checked ) {
        spanMascotaJugador.innerHTML = inputZorbat.id
        mascotaJugador = inputZorbat.id
    } else if ( inputLuminaut.checked) {
        spanMascotaJugador.innerHTML = inputLuminaut.id
        mascotaJugador = inputLuminaut.id
    } else if ( inputDraconix.checked) {
        spanMascotaJugador.innerHTML = inputDraconix.id
        mascotaJugador = inputDraconix.id
    } else if (inputBosstiff.checked) {
        spanMascotaJugador.innerHTML = inputBosstiff.id
        mascotaJugador = inputBosstiff.id
    } else if (inputLionex.checked) {
        spanMascotaJugador.innerHTML = inputLionex.id
        mascotaJugador = inputLionex.id
    } else if (inputZoidon.checked) {
        spanMascotaJugador.innerHTML = inputZoidon.id
        mascotaJugador = inputZoidon.id
    } else{
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques

    for (let i = 0; i < beasts.length; i++) {
        if (mascotaJugador === beasts[i].nombre) {
            ataques = beasts[i].ataques
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {

    ataques.forEach((ataque) => {
        ataquesBeast = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesBeast
    })

    botonTinieblas= document.getElementById('boton-tinieblas')
    botonLuz = document.getElementById('boton-luz')
    botonViento = document.getElementById('boton-viento')
    botonTierra = document.getElementById('boton-tierra')
    botonArtificial = document.getElementById('boton-artificial')
    botonFuego = document.getElementById('boton-fuego')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton)=> {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'Tinieblas 🌑') {
                ataqueJugador.push('Tinieblas 🌑')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            } else if (e.target.textContent === 'Luz ☀️') {
                ataqueJugador.push('Luz ☀️')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            } else if (e.target.textContent === 'Viento 🍃') {
                ataqueJugador.push('Viento 🍃')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            } else if (e.target.textContent === 'Tierra 🪨') {
                ataqueJugador.push('Tierra 🪨')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            } else if (e.target.textContent === 'Artificial 🤖') {
                ataqueJugador.push('Artificial 🤖')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            } else if (e.target.textContent === 'Fuego 🔥') {
                ataqueJugador.push('Fuego 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#3B3030'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0, beasts.length-1)

    spanMascotaEnemigo.innerHTML = beasts[mascotaAleatoria].nombre
    ataquesBeastEnemigo = beasts[mascotaAleatoria].ataques

    secuenciaAtaque()

}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesBeastEnemigo.length - 1);
    let ataqueSeleccionado = ataquesBeastEnemigo[ataqueAleatorio].nombre;

    ataqueEnemigo.push(ataqueSeleccionado);
    console.log(ataqueEnemigo);
    iniciarPelea();
}


function iniciarPelea(){
    if (ataqueJugador.length === 5)
        combate()
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        // Comparar ataques del jugador y del enemigo
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);  // Index para mostrar ambos ataques en los mensajes
            crearMensaje("EMPATE");
        }
        // Lógica de comparación según tipo de ataque
        else if (ataqueJugador[index] === 'Tinieblas 🌑' && (ataqueEnemigo[index] === 'Viento 🍃' || ataqueEnemigo[index] === 'Luz ☀️')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else if (ataqueJugador[index] === 'Luz ☀️' && (ataqueEnemigo[index] === 'Tinieblas 🌑' || ataqueEnemigo[index] === 'Artificial 🤖')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else if (ataqueJugador[index] === 'Viento 🍃' && (ataqueEnemigo[index] === 'Luz ☀️' || ataqueEnemigo[index] === 'Tierra 🪨')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else if (ataqueJugador[index] === 'Tierra 🪨' && (ataqueEnemigo[index] === 'Artificial 🤖' || ataqueEnemigo[index] === 'Fuego 🔥')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else if (ataqueJugador[index] === 'Artificial 🤖' && (ataqueEnemigo[index] === 'Tinieblas 🌑' || ataqueEnemigo[index] === 'Fuego 🔥')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else if (ataqueJugador[index] === 'Fuego 🔥' && (ataqueEnemigo[index] === 'Viento 🍃' || ataqueEnemigo[index] === 'Tinieblas 🌑')) {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVictoriasJugador.innerHTML = victoriasJugador;
        }
        else {
            indexAmbosOponentes(index, index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++;
            spanVictoriasEnemigos.innerHTML = victoriasEnemigo;
        }
    }
    revisarVictorias();
}



function revisarVictorias(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('¡Esto fue un empate!')
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('¡FELICITACIONES, GANASTE!')
    } else {
        crearMensajeFinal('¡Lo lamento, perdiste!')
    }
}

function crearMensaje(resultado){


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){

    sectionMensajes.innerHTML = resultadoFinal

    sectionSeleccionarReinicio.style.display = 'block'

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)