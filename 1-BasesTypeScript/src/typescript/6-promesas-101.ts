(() =>{

  console.log('Inicio');

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('se termino el timeout')
    }, 3000);
  });

  prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
  console.log('Fin');
})();
