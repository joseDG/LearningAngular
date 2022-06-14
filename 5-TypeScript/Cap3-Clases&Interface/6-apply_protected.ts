// class Departamentos{
//   // private id:string;
//   // public nombre: string;
//   protected empleado: string[] = []; //Funciona en todas las clases

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

// class ITDepartamento extends Departamentos{
//   admins: string[];
//   constructor(id: string, admins: string[]){
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }

// class CuentaDepartamentos extends Departamentos{
//   constructor(id: string , private reportes: string[]){
//     super(id, 'Cuenta');
//   }

//   AgregarEmpleado(nombre: string){
//       if(nombre === 'Max'){
//         return;
//       }
//       this.empleado.push(nombre);
//   }

//   AgregarReporte(texto: string){
//     this.reportes.push(texto);
//   }

//   MostrarReportes(){
//     console.log(this.reportes);
//   }
// }

// const it  = new ITDepartamento('dIT', ['Max']);
// it.AgregarEmpleado('Pedro');
// it.AgregarEmpleado('Diana');

// //it.empleado[2] = 'Samuel';

// it.descripcion();
// it.nombre = 'IT NAME';
// it.MostrarEmpleados();

// console.log(it);

// const dptcuenta = new CuentaDepartamentos('d2', []);
// dptcuenta.AgregarReporte('A veces sale mal...');

// dptcuenta.AgregarEmpleado('Max');
// dptcuenta.AgregarEmpleado('Manu');

// dptcuenta.MostrarReportes();
// dptcuenta.MostrarEmpleados();




