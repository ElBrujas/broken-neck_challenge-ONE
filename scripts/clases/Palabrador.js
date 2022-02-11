export class Palbrador{
    constructor(){
        this._palabrasCustom = [];
        this._rutaDatosPalabras = "../resources/db-palabras.txt";
    }

    _obtenerListaPalabras(unaRuta){
        let archivoTxt = new XMLHttpRequest;
        archivoTxt.open("GET", unaRuta, false);
        archivoTxt.send();
        let listaPalabras = archivoTxt.responseText;
        listaPalabras = listaPalabras.split("\n");
        return listaPalabras;
    }

    _combinarListas(unaLista, otraLista){
        unaLista.forEach(unaPalabra => {
            otraLista.push(unaPalabra);
        });
    }

    _generadorDeNumeros(tope){
        return Math.floor(Math.random()*tope);
    }

    agregarPalabra(unaPalbra){
        this._palabrasCustom.push(unaPalbra.toUpperCase());
    }

    generarPalabra(){
        let listaPalabras = this._obtenerListaPalabras(this._rutaDatosPalabras);
        if(this._palabrasCustom.length != 0) this._combinarListas(this._palabrasCustom, listaPalabras);
        return listaPalabras[this._generadorDeNumeros(listaPalabras.length-1)];
    }
}

