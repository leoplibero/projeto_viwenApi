const Usuarios = require('../models/usuariosModel');

exports.getAllUsuarios = (callback) => {
    Usuarios.getAll((err, results) => {
        if (err) {
            callback('Erro ao buscar usuários', null);
        } else {
            callback(null, results);
        }
    });
};

exports.getUsuarioById = (id, callback) => {
    Usuarios.getById(id, (err, results) => {
        if (err) {
            callback('Erro ao buscar usuário', null);
        } else if (results.length === 0) {
            callback('Nenhum usuário encontrado', null);
        } else {
            callback(null, results[0]);
        }
    });
};