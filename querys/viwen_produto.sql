use viewen_db;

select*from produtos;

/*null, nome, cor, tam, tipo, modelo, marca, valor produto*/
select *from cor;
select *from tamanho;
select *from tipo;
select *from modelo;
select *from marca;

insert into produto
values (null, 'Camiseta Polo Alta', 1, 2, 1, 1, 1, 39.90);

insert into produto
values (null, 'Moletom Off White', 2, 2, 1, 2, 5, 299.90);

insert into produto
values (null, 'Camiseta Piet x Oakley', 1, 4, 1, 2, 4, 399.90);

insert into produto
values (null, 'Moletom Oakley', 3, 3, 1, 2, 4, 299.90);

UPDATE produtos
SET qtd = 100
WHERE id = 5;

ALTER TABLE produtos ADD COLUMN estoque int;

ALTER TABLE produtos ADD COLUMN image varchar(255);

ALTER TABLE produtos CHANGE COLUMN estoque qtd INT;