

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

    async listUsuarios(req, res){
      try{
        const listaUsuarios = await Usuario.findAll ();
        res.status(201).json(listaUsuarios)
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar Usuarios' });
      }
  }
  }
module.exports = new UsuarioController();