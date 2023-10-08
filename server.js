const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3000; // Define a porta do servidor

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para a página principal
///app.get('/', (req, res) => {
 //   res.sendFile('C:/multiclinic/views/login.html');
 // });

 app.use(bodyParser.urlencoded({ extended: false }));

 // Rota para a página de login (HTML)
 app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/login.html'); // Substitua 'login.html' pelo nome do seu arquivo HTML de login.
 });
 
 // Rota para processar o formulário de login
 app.post('/login', (req, res) => {
   const nomeUsuario = req.body.txtusuario; // Nome do campo de entrada do usuário
   const senha = req.body.txtsenha; // Nome do campo de entrada da senha
 
   // Aqui você pode implementar a lógica de autenticação
   // Verifique se as credenciais são válidas, por exemplo, em seu banco de dados.
 
   // Exemplo simples: se o nome de usuário e senha forem válidos, redirecione para a página inicial.
   if (nomeUsuario === 'usuario' && senha === 'senha') {
     res.redirect('/pagina-inicial'); // Substitua '/pagina-inicial' pelo URL da página após o login.
   } else {
     res.send('Credenciais inválidas'); // Exibindo uma mensagem de erro em caso de credenciais inválidas.
   }
 });
 
 // Iniciar o servidor
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Servidor em execução na porta ${PORT}`);
 });

  // Rota para a página de cadastro de pacientes
app.get('/cadastro-pacientes', (req, res) => {
    res.sendFile(__dirname + '/public/novo-pacientes.html');
  });


  // Rota para a página de registro de novo atendimentos
  app.get('/novoatendimento', (req, res) => {
    res.sendFile(__dirname + '/public/atendimento.html');
  });

  // Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração das rotas
const registroAtendimentoController = require('./controllers/registroAtendimentoController');
app.use('/registroAtendimento', registroAtendimentoController);








app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
