/*
    ===== Código de TypeScript =====
*/

//private => solo es visible dentro de la clase
//public => se puede ver en cualqueir parte 
//static => me permite lalmar lso objetos sin crear una instancia
class PersonaNormal {

    constructor( 
        public nombre: string, 
        public direccion: string 
    )  {}

}


class Heroe extends PersonaNormal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);