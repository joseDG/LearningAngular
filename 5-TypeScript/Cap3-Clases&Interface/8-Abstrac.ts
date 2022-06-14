// abstract class Departamentos{
//   static fiscalYear = 2020;
//   // private id:string;
//   // public nombre: string;
//   protected empleado: string[] = []; //Funciona en todas las clases

//   //Declarando de una forma mas corta declarar variables
//   constructor(protected readonly id: string , public nombre: string){
//     this.id = id;
//     this.nombre = nombre;
//   }

//   //Creacion Metodo estatico
//   static crearEmpleado(nombre: string){
//     return {nombre : nombre};
//   }

//   //Creacion Metodo Abstracto
//   abstract descripcion(this: Departamentos): void;

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

//   descripcion(this: Departamentos): void {
//       console.log(`El Departamento ${this.nombre} con  empleados`);
//   }
// }

// class CuentaDepartamentos extends Departamentos{


//   constructor(id: string , private reportes: string[]){
//     super(id, 'Cuenta');
//   }

//   descripcion() {
//     console.log('Cuenta Departamento -ID: ' + this.id);
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

// const empleado  = Departamentos.crearEmpleado('Max');
// console.log(empleado, Departamentos.fiscalYear);

// const it = new ITDepartamento('d1', ['Max']);
// it.AgregarEmpleado('Jose');
// it.AgregarEmpleado('Maria');

// it.descripcion();
// it.nombre = 'New Name';
// it.MostrarEmpleados();
// console.log(it);

// const dptcuenta = new CuentaDepartamentos('d2', []);

// dptcuenta.AgregarEmpleado('Max');
// dptcuenta.AgregarEmpleado('Manu');

// dptcuenta.MostrarReportes();
// dptcuenta.MostrarEmpleados();

// dptcuenta.descripcion();




