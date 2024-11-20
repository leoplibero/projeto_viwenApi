const pedidosModel = require('../models/pedidosModel');

const getPedidoById = async (pedidoId) => {
    try {
        const pedido = await pedidosModel.getPedidoById(pedidoId);
        return pedido;
    } catch (error) {
        throw new Error('Erro ao buscar pedido: ' + error.message);
    }
};

const criarPedido = async (body) => {
    const pedido = {
        usuarioId: body.usuarioId,
        produtoId: body.produtoId,
        quantidade: body.quantidade,
        valorPedido: body.valorPedido,
        status: 'novo'
    };

    try {
        const insertId = await pedidosModel.createPedido(pedido);
        return { id: insertId, ...pedido };
    } catch (error) {
        console.log(error);
        throw new Error('Erro inesperado ao criar pedido: ' + error.message);
    }
};

const cancelarPedido = async (pedidoId) => {
    try {
        const pedidoDeletado = await pedidosModel.deletePedido(pedidoId);
        if (!pedidoDeletado) {
            throw new Error('Pedido não encontrado');
        }
        return pedidoDeletado;
    } catch (error) {
        throw new Error('Erro ao cancelar pedido: ' + error.message);
    }
};

module.exports = {
    getPedidoById,
    criarPedido,
    cancelarPedido
};