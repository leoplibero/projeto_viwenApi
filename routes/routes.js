module.exports = function (app) {
    const usuarioController = require('../controllers/usuariosController.js');
    const produtoController = require('../controllers/produtosController.js');

    // Rotas de usuário
    app.get('/usuarios', usuarioController.getAllUsuarios);
    app.get('/usuarios/:id', usuarioController.getUsuarioById);

    app.get('/produtos', produtoController.getAllProdutos);
    app.get('/produtos/:id', produtoController.getProdutoById);
};
