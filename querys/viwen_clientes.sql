use viewen_db;

CREATE TABLE clientes(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(250) NOT NULL,
email VARCHAR(50) NOT NULL,
senha VARCHAR(50) NOT NULL
);
