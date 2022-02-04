import { Corrector } from "./Corrector.js";
import { Palbrador } from "./Palabrador.js";

class Partida{
    constructor(){
        this._palabraSecreta = "";
        this._contadorErrores = 0;
        this._estadoPartida = 0;
        this._palabrasDelUsuario = [];
        this._aciertos = [];

        this._unCorrector = new Corrector;
    }

    _actualizarEstado(){
        if(this._contadorErrores == 6) this._estadoPartida = -1;
        if(this._aciertos.length == this._palabraSecreta.length) this._estadoPartida = 1;
        console.log(this._estadoPartida);
        console.log(this._aciertos);
    }

    comenzarPartida(){
        let unPalabrador = new Palbrador;

        if(this._palabrasDelUsuario.length != 0){
            _palabrasDelUsuario.forEach(element => {
                unPalabrador.agregarPalabra(element);
            });
        }

        this._palabraSecreta = unPalabrador.generarPalabra();
        this._unCorrector.cambiarPalabraSecreta(this._palabraSecreta);
    }

    get palabraSecreta(){
        return this._palabraSecreta;
    }

    get estadoPartida(){
        return this._estadoPartida;
    }

    agregarPalabraPropia(unaPalbra){
        this._palabrasDelUsuario.push(unaPalbra);
    }

    arriesgarLetra(unaLetra){
        let correccion = this._unCorrector.comprobarLetra(unaLetra);
        if(correccion.length == 0) this._contadorErrores++;

        else {
            correccion.forEach(element => {
                this._aciertos.push(element);
            });
        }

        this._actualizarEstado();
        return correccion;
    }

    arriesgarPalabra(unaPalabra){
        if(this._unCorrector.comprobarPalabra(unaPalabra)) this._estadoPartida = 1;
        else this._estadoPartida = -1;
        this._actualizarEstado();
        console.log(this._palabraSecreta);
    }
}
