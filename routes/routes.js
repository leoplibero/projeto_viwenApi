module.exports = function (app) {
    const usuarioController = require('../controllers/usuariosController.js');
    const produtoController = require('../controllers/produtosController.js');
    const pedidosController = require('../controllers/pedidosController.js');

    // Rotas de usuário
    app.get('/usuarios', usuarioController.getAllUsuarios);
    app.get('/usuarios/:id', usuarioController.getUsuarioById);

    // Rotas de produto
    app.get('/produtos', produtoController.getAllProdutos);
    app.get('/produtos/:id', produtoController.getProdutoById);
    app.put('/produtos/:id', produtoController.updateStock); 

    // Rotas de pedidos
    app.get('/pedidos/:id', pedidosController.getPedidoById);
    app.post('/pedidos', pedidosController.createPedido);
    app.delete('/pedidos/:id', pedidosController.deletePedido);
};
