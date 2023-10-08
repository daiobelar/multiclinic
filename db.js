const mysql = require('mysql');

const dbConfig = {
  host: 'localhost', // Endereço do banco de dados
  user: 'root', // Nome de usuário do banco de dados
  password: 'N9y&p@}', // Senha do banco de dados
  database: 'multi23' // Nome da base de dados
};

db.connect((err) => {
  if (err) throw err;
  console.log('Conexão com o banco de dados MySQL estabelecida');
});
module.exports = db;
