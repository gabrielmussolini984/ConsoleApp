CREATE TABLE IF NOT EXISTS  dados_dep (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4