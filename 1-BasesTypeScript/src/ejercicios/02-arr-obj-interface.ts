//Creacion de arreglos
let habilidades: (boolean | string | number)[] = ['Bash','Counter','Healding', 100];
let nopmbres: string[] = ["Jose","Andres","maria"];


//Creacion de Objectos
interface Personaje{
    nombre:string;
    hp:number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Stride',
    hp:100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo nuevo';

console.table(personaje);