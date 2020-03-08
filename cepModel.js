const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

const createTable = `CREATE TABLE IF NOT EXISTS dados_dep (
  id int(11) NOT NULL AUTO_INCREMENT,
  cep int(11) DEFAULT NULL,
  nome varchar(45) NOT NULL,
  endereco varchar(255) DEFAULT NULL,
  bairro varchar(255) DEFAULT NULL,
  estado varchar(2) DEFAULT NULL,
  cidade varchar(255) DEFAULT NULL,
  retorno_api JSON DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`
const insert = (date) => {
  // Se Não Existe a Tabela, Crie!
  connection.query(createTable, (err, rows) => {
    if (err){
      console.log('Erro ao Criar a Tabela :'+err);
      return new Error('Erro ao criar tabela')
    }
  });

  // Inserindo Dados no banco.
  const {logradouro,bairro,localidade,uf,cep} = date.result;
  let dateJson = JSON.stringify(date);
  const insertDate = `INSERT INTO dados_dep (retorno_api, cep, nome, endereco, bairro, estado, cidade)
  VALUES ('${dateJson}', '${cep}', 'teste', '${logradouro}', '${bairro}', '${uf}', '${localidade}')`;

  connection.query(insertDate, (err, rows) => {
    if (err){
      console.log('Erro ao salvar no banco de dados :'+err); 
      return new Error('Erro ao inserir')
    }else{
      console.log('Dados inserido no banco de dados')
      return;
    }
  });
}

const list = () => {
  const insertDate = `SELECT * FROM dados_dep`;
  connection.query(insertDate, (err, rows) => {
    if (err) {
      console.log('Erro ao listar dados :'+err); 
      return new Error('Erro ao listar')
    }else{
      let lista = JSON.stringify(rows);
      console.log(JSON.parse(lista));
      return;
    }
  })
}

module.exports = {
  insert,
  list
}




