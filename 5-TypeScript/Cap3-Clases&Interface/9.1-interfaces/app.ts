interface Person{
  nombre: string;
  edad: number;

  saludar(frase:string): void;
}

let user1: Person;

user1 = {
  nombre: 'Max',
  edad: 30,
  saludar(frase: string){
    console.log(frase + '' + this.nombre);
  }
};

user1.saludar('Hola me llamo ');