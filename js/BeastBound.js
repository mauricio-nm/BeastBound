const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarReinicio = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionSeleccionarReinicio.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const spanVictoriasJugador = document.getElementById("victorias-jugador")
const spanVictoriasEnemigos = document.getElementById("victorias-enemigos")

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let enemigoId = null
let beasts = []
let beastsEnemigos = []
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
let mascotaJugadorObjeto
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
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/beastMap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Beast {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 70
        this.alto = 70
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarBeast(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let zorbat = new Beast('Zorbat', './assets/zorbat.png', 5, './assets/zorbat.png')

let luminaut = new Beast('Luminaut', './assets/luminaut.png', 5, './assets/luminaut.png')

let draconix = new Beast('Draconix', './assets/draconix.png', 5, './assets/draconix.png')

let bosstiff = new Beast('Bosstiff', './assets/bosstiff.png', 5, './assets/bosstiff.png')

let zoidon = new Beast('Zoidon', './assets/zoidon.png', 5, './assets/zoidon.png')

let lionex = new Beast('Lionex', './assets/lionex.png', 5, './assets/lionex.png')


const ZORBAT_ATAQUES = [
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
]

zorbat.ataques.push(...ZORBAT_ATAQUES)

const LUMINAUT_ATAQUES = [
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
];

luminaut.ataques.push(...LUMINAUT_ATAQUES);

const DRACONIX_ATAQUES = [
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
];

draconix.ataques.push(...DRACONIX_ATAQUES);

const BOSSTIFF_ATAQUES = [
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Tierra 🪨', id: 'boton-tierra' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
];

bosstiff.ataques.push(...BOSSTIFF_ATAQUES);

const ZOIDON_ATAQUES = [
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Artificial 🤖', id: 'boton-artificial' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
    { nombre: 'Tinieblas 🌑', id: 'boton-tinieblas' },
];

zoidon.ataques.push(...ZOIDON_ATAQUES);

const LIONEX_ATAQUES = [
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Fuego 🔥', id: 'boton-fuego' },
    { nombre: 'Viento 🍃', id: 'boton-viento' },
    { nombre: 'Luz ☀️', id: 'boton-luz' },
];

lionex.ataques.push(...LIONEX_ATAQUES);


beasts.push(zorbat,luminaut,draconix,bosstiff,lionex,zoidon)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
        .then(function (res){
            if(res.ok){
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    } )
            }
        })
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

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

    seleccionarBeast(mascotaJugador)

    extraerAtaques(mascotaJugador)

    sectionVerMapa.style.display = 'flex'

    iniciarMapa()

}

function seleccionarBeast(mascotaJugador){
    fetch(`http://localhost:8080/beast/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            beast: mascotaJugador
        })
    })
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
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }

        })
    })

}

function enviarAtaques(){
    fetch(`http://localhost:8080/beast/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://localhost:8080/beast/${enemigoId}/ataques`)
        .then(function(res){
            if(res.ok){
                res.json()
                    .then(function({ ataques }){
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesBeastEnemigo = enemigo.ataques
    secuenciaAtaque()

}

function ataqueAleatorioEnemigo() {
    console.log('Ataques enemigo', ataquesBeastEnemigo)
    let ataqueAleatorio = aleatorio(0, ataquesBeastEnemigo.length -1);
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

    clearInterval(intervalo)

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

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height

    )
    mascotaJugadorObjeto.pintarBeast()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    beastsEnemigos.forEach(function (beast) {
        if (beast != undefined) {
            beast.pintarBeast()
            revisarColision(beast)
        }
    })

}

function enviarPosicion(x, y){
    fetch(`http://localhost:8080/beast/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
        .then(function (res) {
            if(res.ok) {
                res.json()
                    .then(function ({ enemigos }) {
                        console.log(enemigos)
                        beastsEnemigos = enemigos.map(function (enemigo) {
                            let beastEnemigo = null
                            if (enemigo.beast != undefined) {
                                const beastNombre = enemigo.beast.nombre || ""
                                if (beastNombre === "Zorbat"){
                                    beastEnemigo = new Beast('Zorbat', './assets/zorbat.png', 5, './assets/zorbat.png', enemigo.id)
                                } else if (beastNombre === "Luminaut") {
                                    beastEnemigo = new Beast('Luminaut', './assets/luminaut.png', 5, './assets/luminaut.png', enemigo.id)
                                } else if (beastNombre === "Draconix") {
                                    beastEnemigo = new Beast('Draconix', './assets/draconix.png', 5, './assets/draconix.png', enemigo.id)
                                } else if (beastNombre === "Bosstiff"){
                                    beastEnemigo = new Beast('Bosstiff', './assets/bosstiff.png', 5, './assets/bosstiff.png', enemigo.id)
                                } else if (beastNombre === "Zoidon") {
                                    beastEnemigo = new Beast('Zoidon', './assets/zoidon.png', 5, './assets/zoidon.png', enemigo.id)
                                } else if (beastNombre === "Lionex") {
                                    beastEnemigo = new Beast('Lionex', './assets/lionex.png', 5, './assets/lionex.png', enemigo.id)
                                }
    
                                beastEnemigo.x = enemigo.x
                                beastEnemigo.y = enemigo.y
    
                            }
                            return beastEnemigo
                        })
                    })
            }
        })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5

}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {

    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}


function iniciarMapa() {


    mascotaJugadorObjeto = obtenerObjetoBeast(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoBeast() {

    for (let i = 0; i < beasts.length; i++) {
        if (mascotaJugador === beasts[i].nombre) {
            return beasts[i]
        }
    }

}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo  ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    enemigoId =  enemigo.id
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)

}

window.addEventListener('load', iniciarJuego)