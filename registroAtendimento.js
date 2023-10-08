const db = require('../db');

class RegistroAtendimento {
  static criarRegistroAtendimento(dataHora, descricao, pacienteID, profissionalID, callback) {
    const query = 'INSERT INTO RegistroAtendimento (DataHora, Descricao, PacienteID, ProfissionalID) VALUES (?, ?, ?, ?)';
    const values = [dataHora, descricao, pacienteID, profissionalID];
    
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Erro ao criar registro de atendimento:', err.message);
        return callback(err, null);
      }
      
      console.log('Registro de atendimento criado com sucesso.');
      callback(null, result.insertId);
    });
  }
}

module.exports = RegistroAtendimento;
