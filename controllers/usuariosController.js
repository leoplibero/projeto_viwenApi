const usuariosService = require('../services/usuariosService');

exports.getAllUsuarios = (req, res) => {
    usuariosService.getAllUsuarios((err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
};

exports.getUsuarioById = (req, res) => {
    const id = req.params.id;
    usuariosService.getUsuarioById(id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
};