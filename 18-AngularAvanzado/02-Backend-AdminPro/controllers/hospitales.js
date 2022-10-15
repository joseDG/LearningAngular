const { response } = require('express');
const Hospital = require('../models/hospital');

const getHospitales = async (req, res = response) => {

  //El populate permite mostrar el nombre de quien creo
  //el hospital.
  const hospitales = await Hospital.find()
                                   .populate('usuario', 'nombre')

  res.json({
    ok:true,
    hospitales
  })
}

const crearHospitales = async (req, res = response) => {

  const uid = req.uid;
  const hospital = new Hospital({
    usuario: uid,
    ...req.body
  });

  try {

    await hospital.save()



    res.json({
      ok:true,
      msg: 'PostHospitales'
    })
    
  } catch (error) {
    console.log(error)
    res.json(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
  
}

const actualizarHospitales = (req, res=response) => {
  res.json({
    ok:true,
    msg: 'Actualizar Hospitales'
  })
}

const eliminarHospitales = (req, res=response) => {
  res.json({
    ok:true,
    msg: 'Eliminar Hospitales'
  })
}


module.exports = {
  getHospitales,
  crearHospitales,
  actualizarHospitales,
  eliminarHospitales
}