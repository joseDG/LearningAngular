(function(){
  
  function getEdad(){
   return 100 + 100 + 300;
  }
 
  const nombre = 'Jose';
  const apellido = 'Diaz';
  const edad = 33;
 
 //  const salida = nombre + apellido + edad;
 const salida = `
   ${nombre}
   ${apellido}
   (${getEdad()})
 `;
 console.log(salida);
 
 })();
 