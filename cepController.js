const fetch = require('node-fetch');
const cepModel = require('./cepModel');

const create = async(cep) =>{
  try {
    let date = await fetch(`http://cep.bldstools.com/?cep=${cep}`);
    date = await date.json();
    if (date.code == 404 || date.code == 401){
      console.log('CEP Não encontrado ou inválido')
      throw('Erro ao encontrar cep');
    }else{
      cepModel.insert(date);
    }
  } catch (error) {
    console.log(error); 
    process.exit();
  }
}

const list = () =>{
  cepModel.list() 
}

module.exports = {
  create,
  list
}