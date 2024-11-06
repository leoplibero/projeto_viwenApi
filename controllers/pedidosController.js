const pedidosService = require('../services/pedidosService');


const getPedidoById = async (req, res) => {
    try {
        const pedido = await pedidosService.getPedidoById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar pedido', error });
    }
};

const createPedido = async (req, res) => {
    try {
        const novoPedido = await pedidosService.criarPedido(req.body);
        res.status(201).json(novoPedido);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar pedido', error });
    }
};

const deletePedido = async (req, res) => {
    try {
        const pedidoDeletado = await pedidosService.cancelarPedido(req.params.id);
        if (!pedidoDeletado) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.status(200).json({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar pedido', error });
    }
};

module.exports = {
    getPedidoById,
    createPedido,
    deletePedido
};