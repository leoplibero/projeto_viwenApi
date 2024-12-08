select*from pedidos;

use viewen_db;

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL,
    quantidade INT NOT NULL,
    valorPedido DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'novo',
    dataPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE pedidos_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedidoId INT NOT NULL,
    produtoId INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (pedidoId) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (produtoId) REFERENCES produtos(id)
);

