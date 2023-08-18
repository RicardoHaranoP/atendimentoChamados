

const Chamado = require('../models/chamados');

class ChamadosController {
    async createChamado(req, res) {
      try {
        let { titulo, descricao, prazoSolucao, dataCriacao, dataSolucao } = req.body;
        const novoChamado = await Chamado.create({ titulo, descricao, prazoSolucao, dataCriacao, dataSolucao });
        res.status(201).json(novoChamado);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar chamado.' });
      }
    }
  }
module.exports = new ChamadosController();