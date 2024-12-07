const db = require('../db');

const createPedido = async (pedido) => {
    const { usuarioId, produtos, quantidade, valorPedido, status } = pedido;

    if (!Array.isArray(produtos) || produtos.length === 0) {
        throw new Error('A lista de produtos é inválida ou está vazia.');
    }

    const queryPedido = 'INSERT INTO pedidos (usuarioId, quantidade, valorPedido, status) VALUES (?, ?, ?, ?)';
    const queryProduto = 'INSERT INTO pedidos_produtos (pedidoId, produtoId, quantidade) VALUES ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(queryPedido, [usuarioId, quantidade, valorPedido, status], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });

        const pedidoId = results.insertId;

        // Inserir produtos associados ao pedido em lote (com produtoId e quantidade)
        const values = produtos.map(produto => [pedidoId, produto.produtoId, produto.quantidade]);
        await new Promise((resolve, reject) => {
            db.query(queryProduto, [values], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });

        return pedidoId;
    } catch (error) {
        console.error('Erro ao criar pedido:', error.message);
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

module.exports = {
    createPedido,
    getPedidoById,
};
