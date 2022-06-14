class Departamento{
  nombre: string;

  constructor(n: string){
    this.nombre = n;
  }

  descripcion(this: Departamento){
    console.log('Departamento:' + this.nombre);
  }
}

const dpto = new Departamento('Ventas');
dpto.descripcion();

const dptoCopia = {nombre: 'Tecnologias', descripcion: dpto.descripcion };
dptoCopia.descripcion();