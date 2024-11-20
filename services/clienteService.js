const Cliente = require('../models/clienteModel.js');

exports.createCliente = (cliente) => {
    return new Promise((resolve, reject) => {
        Cliente.createCliente(cliente, (err, results) => {
            if (err) {
                return reject(new Error('Erro ao criar cliente'));
            } else {
                resolve(results);
            }
        });
    });
};

exports.getClienteById = (id) => {
    return new Promise((resolve, reject) => {
        Cliente.getClienteById(id, (err, results) => {
            if (err) {
                return reject(new Error('Erro ao buscar cliente'));
            } else {
                resolve(results);
            }
        });
    });
};

exports.getAllClientes = () => {
    return new Promise((resolve, reject) => {
        Cliente.getAllClientes((err, results) => {
            if (err) {
                return reject(new Error('Erro ao buscar clientes'));
            } else {
                resolve(results);
            }
        });
    });
};

exports.getClienteByEmail = (email) => {
    return new Promise((resolve, reject) => {
        Cliente.getClienteByEmail(email, (err, results) => {
            if (err) {
                return reject(new Error('Erro ao buscar cliente'));
            } else {
                resolve(results);
            }
        });
    });
};