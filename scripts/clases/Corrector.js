export class Corrector{
      constructor(palbraSecreta){
          this._palabraSecreta = palbraSecreta;
      }

      cambiarPalabraSecreta (unaPalabra){
          this._palabraSecreta = unaPalabra;
      }

      comprobarLetra(unaLetra){
          let indiceCoincidencias = [];
          [...this._palabraSecreta].forEach(function(letra, index){
            if(unaLetra == letra) indiceCoincidencias.push(index);
          });

          return indiceCoincidencias;
      }

      comprobarPalabra(unaPalabra){
          return unaPalabra == this._palabraSecreta;
      }
}
