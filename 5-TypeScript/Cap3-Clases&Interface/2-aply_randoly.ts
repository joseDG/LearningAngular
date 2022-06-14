// class Departamentos{
//   // private id:string;
//   // public nombre: string;
//   private empleado: string[] = []; //Solo funciona para trabajar dentro de la clase

//   //Declarando de una forma mas corta declarar variables
//   constructor(private readonly id: string , public nombre: string){
//     this.id = id;
//     this.nombre = nombre;
//   }

//   descripcion(this: Departamentos){
//     console.log(`Departamento (${this.id}): ${this.nombre}`);
//   }

//   AgregarEmpleado(empleado: string){
//     //this.id = 'd001'; //Aqui se aplica la propiedad randoly solo permite que sea de lectura y no se puede modificar
//     this.empleado.push(empleado);
//   }

//   MostrarEmpleados(){
//     console.log(this.empleado.length);
//     console.log(this.empleado);
//   };
// }

// const dpto1 = new Departamentos('dventas', 'Ventas');

// dpto1.AgregarEmpleado('Juan');
// dpto1.AgregarEmpleado('Maria');

// //de esta forma se agrega otro empleado
// //dpto1.empleado[2] = 'Anna';

// dpto1.descripcion();
// dpto1.nombre = 'NEW NAME';
// dpto1.MostrarEmpleados();