const db = require("../db");

exports.createCliente = (cliente, callback) => {
    const query = 'INSERT INTO clientes (nome, email, senha) VALUES (?, ?, ?)';
    db.query(query, [cliente.nome, cliente.email, cliente.senha], callback);
};

exports.getClienteById = (id, callback) => {
    const query = 'SELECT * FROM clientes WHERE id = ?';
    db.query(query, [id], callback);
};

exports.getAllClientes = (callback) => {
    const query = 'SELECT * FROM clientes';
    db.query(query, callback);
};

exports.getClienteByEmail = (email, callback) => {
    const query = 'SELECT * FROM clientes WHERE email = ?';
    db.query(query, [email], callback);
};
