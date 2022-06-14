interface Saludable{
  nombre:string;

  saludar(frase: string):void;
}

class Persona implements Saludable{
  nombre: string;
  edad = 30;

  constructor(n: string){
    this.nombre = n;
  }

  saludar(frase: string): void {
    console.log(frase + '' + this.nombre);
  }
}

let usuario: Saludable;

usuario = new Persona('Juan');

usuario.saludar('Hola soy ');
console.log(usuario);