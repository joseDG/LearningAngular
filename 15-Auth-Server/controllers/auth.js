const { response } = require('express');

const crearUsuario = (req, res = response) => {

  const { email, name, password } = req.body;

  return res.json({
    ok: true,
    msg: 'Crear usuario /new'
  });
  
}

const loginUsuario = (req, res) => {

  const {email, password } = req.body;

  return res.json({
    ok: true,
    msg: 'Login usuario /'
  });
  
}

const revalidarToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: 'Renew'
  });
  
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}