//valor desconocido
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){
  userName = userInput;
}

//Creacion del never
function generateError(message: string, code: number):never{
  throw {message: message, errorCode: code};
}

generateError('An error ocurred!', 500);