/*
  Hospitales
  ruta : 'api/upload'
*/

const {Router} = require('express');
const expressFileUpload = require('express-fileupload');

const { fileUpload, retornarImagen } = require('../controllers/uploads');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.use(expressFileUpload({
  // limits: { fileSize: 50 * 1024 * 1024 },
}));


router.put('/:tipo/:id', validarJWT, fileUpload);

router.get('/:tipo/:foto',retornarImagen );



module.exports = router;