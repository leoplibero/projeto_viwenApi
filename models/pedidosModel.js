const db = require('../db');

// Função para criar um novo pedido
const createPedido = async (pedido) => {
    const { usuarioId, produtoId, quantidade, valorPedido } = pedido;
    const query = 'INSERT INTO pedidos (usuarioId, produtoId, quantidade, valorPedido) VALUES (?, ?, ?, ?)';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [usuarioId, produtoId, quantidade, valorPedido], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
        return results.insertId;
    } catch (error) {
        throw new Error('Erro ao criar pedido: ' + error.message);
    }
};

// Função para obter um pedido pelo ID
const getPedidoById = async (id) => {
    const query = 'SELECT * FROM pedidos WHERE id = ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
        return results[0];
    } catch (error) {
        throw new Error('Erro ao buscar pedido: ' + error.message);
    }
};

// Função para deletar um pedido pelo ID
const deletePedido = async (id) => {
    const query = 'DELETE FROM pedidos WHERE id = ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
        return results.affectedRows;
    } catch (error) {
        throw new Error('Erro ao deletar pedido: ' + error.message);
    }
};

module.exports = {
    createPedido,
    getPedidoById,
    deletePedido
};