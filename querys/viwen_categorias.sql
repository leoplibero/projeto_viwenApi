create table categorias(
id_categoria int auto_increment primary key,
descricao_categoria varchar(15)
);

create index idx_categoria on categorias (descricao_categoria);

insert into categorias (descricao_categoria)
values ('Camisas');

insert into categorias (descricao_categoria)
values ('Moletons');

insert into categorias (descricao_categoria)
values ('Acessórios');

insert into categorias (descricao_categoria)
values ('Regatas');