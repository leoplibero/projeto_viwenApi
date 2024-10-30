const express = require('express');
const request = require('supertest');
const usuarioController = require('../controllers/usuariosController.js');
const produtoController = require('../controllers/produtosController.js');
const routes = require('../routes.js');

// __tests__/routes.test.js

jest.mock('../controllers/usuariosController.js');
jest.mock('../controllers/produtosController.js');

describe('Routes', () => {
    let app;

    beforeEach(() => {
        app = express();
        routes(app);
    });

    test('should set up GET /usuarios route', async () => {
        await request(app).get('/usuarios');
        expect(usuarioController.getAllUsuarios).toHaveBeenCalled();
    });

    test('should set up GET /usuarios/:id route', async () => {
        const id = 1;
        await request(app).get(`/usuarios/${id}`);
        expect(usuarioController.getUsuarioById).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });

    test('should set up GET /produtos route', async () => {
        await request(app).get('/produtos');
        expect(produtoController.getAllProdutos).toHaveBeenCalled();
    });

    test('should set up GET /produtos/:id route', async () => {
        const id = 1;
        await request(app).get(`/produtos/${id}`);
        expect(produtoController.getProdutoById).toHaveBeenCalledWith(expect.any(Object), expect.any(Object));
    });
});