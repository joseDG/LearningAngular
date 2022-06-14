// class Departamentos{

//   public nombre: string;
//   private empleado: string[] = []; //Solo funciona para trabajar dentro de la clase

//   constructor(n: string){
//     this.nombre = n;
//   }

//   descripcion(this: Departamentos){
//     console.log('Departamento: ' + this.nombre);
//   }

//   AgregarEmpleado(empleado: string){
//     this.empleado.push(empleado);
//   }

//   MostrarEmpleados(){
//     console.log(this.empleado.length);
//     console.log(this.empleado);
//   };
// }

// const dpto1 = new Departamentos('Ventas');

// dpto1.AgregarEmpleado('Juan');
// dpto1.AgregarEmpleado('Maria');

// //de esta forma se agrega otro empleado
// //dpto1.empleado[2] = 'Anna';

// dpto1.descripcion();
// dpto1.nombre = 'NEW NAME';
// dpto1.MostrarEmpleados();