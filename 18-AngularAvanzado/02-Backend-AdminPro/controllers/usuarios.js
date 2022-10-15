const { response } = require('express');
const bcrypt = require('bcryptjs');


const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async(req, res) => {

  const desde = Number(req.query.desde) || 0;
  
  const[usuarios, total ] = await Promise.all([
    Usuario
      .find({}, 'nombre email rele google')
      .skip(desde)
      .limit(5),

    Usuario.countDocuments(),
  ]);

  res.json({
      ok: true,
      usuarios,
      //Permite verificar que usuario hizo peticion
      //uid: req.uid
      total
  });

}

const crearUsuario = async(req, res= response) => {

  //el req.body => esta toda la informacion enviada del cliente
  const{ email, password } = req.body;

  try{
    //Validando que el correo no se repita
    const existeEmail = await Usuario.findOne({ email });

    if(existeEmail){
      return res.status(400).json({
        ok:false,
        msg: 'El correo ya esta registrado'
      });
    }

    const usuario = new Usuario(req.body);

    //Encriptar contrasena
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    //Guardar usuario
    await usuario.save();

    //Generar el TOKEN - JWT
    const token = await generarJWT(usuario.id);

    res.json({
      ok: true,
      usuario,
      token
    });

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok:false,
      msg: 'Error inesperado... revisar logs'
    });
  }

  
}

const actualizarUsuario = async (req, res = response) => {

  //TODO: Validar token y comprobar si es el usuario correcto
  const uid = req.params.id;
  

  try{

    const usuarioDB = await Usuario.findById( uid );

    if(!usuarioDB){
      return res.status(404).json({
        ok: false,
        msg: 'No existe un usuario por ese id'
      });
    }

    //Actualizaciones
    const { password, google, email, ...campos} = req.body;

    //Verifica si los email se repiten
    if(usuarioDB.email !== email){
    
      const existeEmail = await Usuario.findOne({ email });
      if(existeEmail){
        return res.status(400).json({
          ok:false,
          msg: 'Ya existe un usuario con ese email'
        });
      }
    }

    campos.email = email;

    const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

    res.json({
      ok:true,
      usuario: usuarioActualizado
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error inesperado'
    })
  }
}

const borrarUsuario = async(req, res= response) => {

  const uid = req.params.id;

  try{

    const usuarioDB = await Usuario.findById( uid );

    if(!usuarioDB){
      return res.status(404).json({
        ok: false,
        msg: 'No existe un usuario por ese id'
      });
    }

    await Usuario.findByIdAndDelete(uid);

    res.json({
      ok:true,
      msg: 'Usuario Eliminado'
    })

  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    });
  }
}

module.exports = {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario
}