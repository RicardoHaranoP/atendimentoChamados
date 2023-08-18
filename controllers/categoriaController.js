

const Categoria = require('../models/categoria');

class CategoriaController {
    async createCategoria(req, res) {
      try {
        let { nomeCategoria } = req.body;
        const novoCategoria = await Categoria.create({ nomeCategoria });
        res.status(201).json(novoCategoria);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Categoria.' });
      }
    }
  }
module.exports = new CategoriaController();