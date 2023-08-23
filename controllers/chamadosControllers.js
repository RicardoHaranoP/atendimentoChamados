

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

  async listChamado(req, res) {
    try {
      const listaChamado = await Chamado.findAll();
      res.status(201).json(listaChamado)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar Chamados' });
    }
  }

  async deleteChamado(req, res) {

    
    try {
      const { num } = req.id
      const chamadoDel = await Chamado.destroy({
        where: {
          id: num
        }
      });
      res.status(201).json(chamadoDel)

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar Chamado' });

    }
  }
}
module.exports = new ChamadosController();