
const express = require('express');
const app = express();
const port = 8000;
const sequelize = require('./db');

const chamadosController = require('./controllers/chamadosControllers');
const situacaoController = require('./controllers/situacaoController');
const categoriaController = require('./controllers/categoriaController');
const usuarioController = require('./controllers/usuarioController');

app.use(express.json());

app.post('/chamados', chamadosController.createChamado);
app.post('/situacao', situacaoController.createSituacao);
app.post('/categoria', categoriaController.createCategoria);
app.post('/usuarios', usuarioController.createUsuario);

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', function(req,res) {
    res.send('bem vindo ao sobre')
})

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar modelos:', error);
  });