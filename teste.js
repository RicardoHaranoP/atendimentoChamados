// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('atendimentochamadas', 'root', '1234', {
//     host: "localhost",
//     dialect: "mysql"
// })

// sequelize.authenticate().then(function(){
//     console.log('conectado ao banco de dados')
// }).catch(function(erro) {
//     console.log(`falha ao se conectar ${erro}`)
// })

const axios = require('axios');

// const data = {
//   titulo: 'Título do Chamado',
//   descricao: 'Descrição do Chamado',
//   prazoSolucao: '2023-08-17',
//   dataCriacao: '2023-08-17'
// };

const data = {
    nome: 'usuario teste',
    email: 'teste@gmail.com',
    senha: '341243'
};

axios.post('http://localhost:8000/usuarios', data) 
  .then(response => {
    console.log('Resposta do servidor:', response.data); 
  })
  .catch(error => {
    console.error('Erro ao fazer a solicitação:', error); 
  });