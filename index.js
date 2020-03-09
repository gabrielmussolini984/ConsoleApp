#!/usr/bin/env node
const program = require('commander');
const package = require('./package.json');
require('dotenv')

const cepController = require('./controllers/cepController');

program.version(package.version);

// Buscando CEP e INSERINDO NO BANCO
program
  .command('add [cep]')
  .description('Busca Cep e grava no banco de dados.')
  .action((cep) => {
    try {
      cepController.create(cep);
    } catch (error) {
      console.log(error)
    }
  });

// Listando os CEP do banco
program
  .command('list')
  .description('Lista todos endereço cadastrado no banco de dados.')
  .action(() => {
    cepController.list();
    
  });


program.parse(process.argv);