import { Partida } from "../clases/Partida.js";

let partidaActual = new Partida;
partidaActual.comenzarPartida();

function actualizarTablero(){
    contadorStrikes.textContent = 6-partidaActual._contadorErrores;
    mostrador_palabra.value = palabraEnJuego.toString();
    console.log(partidaActual.palabraSecreta);
    revisarEstadoPartida();
}

function revisarEstadoPartida(){
    if(partidaActual.estadoPartida == 1){
        mostrador_palabra.value = partidaActual.palabraSecreta;
        bloquearTeclas();
        setTimeout(() => {
            location.href = "./pantalla-win.html";
          }, 1000);   
    }
    else if(partidaActual.estadoPartida == -1){
        mostrador_palabra.value = partidaActual.palabraSecreta;
        bloquearTeclas();
        animacion.click();
        setTimeout(() => {
            location.href = "./pantalla-game-over.html";
          }, 3000);
    }
}

function generarPalabraEnJuego(){
    let palabra_vacia = new Array;
    for (let index = 0; index < partidaActual.palabraSecreta.length; index++) {
        palabra_vacia.push("_");
    }
    return palabra_vacia;
}

function actualizarPalabraEnJuego(unaLetra, unArray){
    unArray.forEach(element => {
        palabraEnJuego[element] = unaLetra;
    });
}

function actualizarTableroDeErrores(unaLetra){
    mostradorLetrasErradas.value += unaLetra;
}

function actualizarIlustracion(){
    partesCuerpo[partidaActual._contadorErrores-1].classList.remove("hide");
}

function jugarLetra(unaLetra){
    let aciertos = partidaActual.arriesgarLetra(unaLetra);
    if(aciertos.length != 0) {
        actualizarPalabraEnJuego(unaLetra, aciertos)
    }
    else {
        actualizarTableroDeErrores(unaLetra);
        actualizarIlustracion();
    };
    actualizarTablero();
}

function comportamientoTeclas(){
    [...teclas].forEach(unaTecla => {
        unaTecla.addEventListener("click", function () {
            jugarLetra(unaTecla.textContent);
            unaTecla.disabled = true;
            unaTecla.classList.add("tecla-usada");
        })
    });    
}

function bloquearTeclas(){
    [...teclas].forEach(unaTecla => {
        unaTecla.disabled = true;
    }); 
}

let contadorStrikes = document.querySelector(".contador-errores");
let palabraEnJuego = generarPalabraEnJuego();
let mostrador_palabra = document.querySelector(".palabra-en-juego");
let mostradorLetrasErradas = document.getElementById("letras-falladas");
let teclas = document.getElementsByClassName("teclas");
let ilustracion = document.getElementById("body");
let partesCuerpo = ilustracion.children;
let animacion = document.getElementById("animate");

mostradorLetrasErradas.value = "";
comportamientoTeclas();
actualizarTablero();


