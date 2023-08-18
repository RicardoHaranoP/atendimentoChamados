

const Usuario= require('../models/usuarios');

class UsuarioController {
    async createUsuario(req, res) {
      try {
        let { nome, email, senha } = req.body;
        const novoUsuario= await Usuario.create({ nome, email, senha });
        res.status(201).json(novoUsuario);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Usuario' });
      }
    }
  }
module.exports = new UsuarioController();