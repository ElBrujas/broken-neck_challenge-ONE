let botonComenzar = document.getElementById("boton-comenzar");
let botonAgregarPalabra = document.getElementById("boton-agregar-palabra");

function irPantallaJuego(){
    location.href = "./html/pantalla-juego.html";
}

function agregarPalabra(){
    alert("Funcion deshabilitada hasta que el programador encuentre una mejor forma de manejar archivos en JS");
}

botonComenzar.onclick = irPantallaJuego;
botonAgregarPalabra.onclick = agregarPalabra;