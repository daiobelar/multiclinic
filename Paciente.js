const db = require('./db'); // Importe a configuração do banco de dados (db.js)

const Paciente = {};

// Crie um novo paciente no banco de dados
Paciente.create = (novoPaciente, callback) => {
  db.query(
    'INSERT INTO Paciente (Nome, CPF, Celular, Email, EncaminhamentoMedico, FormaDePagamento, MenorDe18Anos, ResponsavelNome, ResponsavelCPF, ProfissionalID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      novoPaciente.Nome,
      novoPaciente.CPF,
      novoPaciente.Celular,
      novoPaciente.Email,
      novoPaciente.EncaminhamentoMedico,
      novoPaciente.FormaDePagamento,
      novoPaciente.MenorDe18Anos,
      novoPaciente.ResponsavelNome,
      novoPaciente.ResponsavelCPF,
      novoPaciente.ProfissionalID
    ],
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};

module.exports = Paciente;
