const Usuarios = require('../models/usuariosModel')


exports.getAllUsuarios = (req, res) => {
    Usuarios.getAll((err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar usuarios')
        } else {
            res.json(results);
        }
    });
};

exports.getUsuarioById = (req, res) => {
    const id = req.params.id;
    Usuarios.getById(id, (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar usuario');
        } else if (results.length == 0) {
            res.status(404).send('Nenhum usuario encontrado')
        } else
            res.json(results[0])

    });
};