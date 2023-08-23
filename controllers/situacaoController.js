

const Situacao = require('../models/situacao');

class SituacaoController {
    async createSituacao(req, res) {
      try {
        let { nomeSituacao } = req.body;
        const novoSituacao = await Situacao.create({ nomeSituacao });
        res.status(201).json(novoSituacao);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Situacao.' });
      }
    }

    async listSituacao(req, res){
      try{
        const listaSituacao = await Situacao.findAll ();
        res.status(201).json(listaSituacao)
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar Situacaos' });
      }
  }
  }
module.exports = new SituacaoController();