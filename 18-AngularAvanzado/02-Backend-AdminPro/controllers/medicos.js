const { response } = require('express');
const Medico = require('../models/medico');

const getMedicos = async (req, res = response) => {

  const medicos = await Medico.find()
                                   .populate('hospital', 'nombre img')
  res.json({
    ok:true,
    medicos
  })
}

const crearMedicos = async (req, res = response) => {

  const uid = req.uid;
  const medico = new Medico({
    usuario: uid,
    ...req.body
  });

  try {

    const medicoDB =  await medico.save()


    res.json({
      ok:true,
      medico: medicoDB 
    })
    
  } catch (error) {
    console.log(error)
    res.json(500).json({
      ok:false,
      msg: 'hable con el administrador'
    })
  }
}

const actualizarMedicos = (req, res=response) => {
  res.json({
    ok:true,
    msg: 'Actualizar Medicos'
  })
}

const eliminarMedicos = (req, res=response) => {
  res.json({
    ok:true,
    msg: 'Eliminar Medicos'
  })
}


module.exports = {
  getMedicos,
  crearMedicos,
  actualizarMedicos,
  eliminarMedicos
}