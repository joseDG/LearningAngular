const mongoose = require('mongoose');

const dbConnection = async() => {
  try{

    await mongoose.createConnection( process.env.DATABASE_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DB Online');

  }catch(error){
    console.log(error);
    throw new Error('Error a la hora de inicializar DB');
  }
}

module.exports = {
  dbConnection
}