const Produtos = require('../models/produtosModel')

exports.getAllProdutos = (req, res) => {
    Produtos.getAll((err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar produtos')
        } else {
            res.json(results);
        }
    });
}

exports.getProdutoById = (req, res) => {
    const id = req.params.id;
    Produtos.getById(id, (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar produto'); 
        } else if (results.length == 0) {
            res.status(404).send('Nenhum produto encontrado')
        } else {
            res.json(results[0]);
        }
    });
}