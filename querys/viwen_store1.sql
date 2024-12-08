create database viwen_proj;
use viwen_proj;
/*drop database viwen_proj;*/

create table estado( 
id_uf_est char (2) primary key,
descricao_uf char (20)
);

/*linkar no programa a tabela cliente para cadastro e os dados login_cli e senha_cli para login*/
create table cliente(
id_cli int auto_increment primary key,
email_cli varchar(25),
login_cli varchar(25),
senha_cli varchar(8),
nome_cli varchar(50),
cpf_cli varchar(11),
telefone_cli varchar(15),
endereco_cli varchar(100),
complemento_cli varchar(20),
bairro_cli varchar(20),
cidade_cli varchar(20),
id_uf_est char (2),
cep_cli varchar(8),
foreign key (id_uf_est) references estado (id_uf_est)
);
/*como discutido em aula, as especificações de dados é necessária porque algumas cidades pequenas tem um só cep
e sem os outros dados é impossível fazer a entrega*/

create index idx_cli on cliente (login_cli);
/*index: indíce para agilizar a busca de dados específicos*/

create table pagamento(
id_pgto int auto_increment primary key,
descricao_pgto varchar(20)
);

/*PRÓXIMAS TABLES: ESPECÍFICOS PARA IMPEDIR REDUNDÂNCIA DE DADOS
NÃO ESQUEÇAM DE RODAS AS TABELAS ESPECÍFICAS!

acessórios, roupas ou calçados*/
create table tipo(
id_tipo int auto_increment primary key,
descricao_tipo varchar(15)
);

create index idx_tipo on tipo (descricao_tipo);

create table marca(
id_marca int auto_increment primary key,
nome_marca varchar(15)
);

create index idx_marca on marca (nome_marca);

/*camiseta, calça, moletom, etc*/
create table modelo(
id_modelo int auto_increment primary key,
descricao_modelo varchar(30)
);

create index idx_mod on modelo (descricao_modelo);

create table cor(
id_cor int auto_increment primary key,
nome_cor varchar(10)
);

create index idx_cor on cor (nome_cor);

create table tamanho(
id_tam int auto_increment primary key,
descricao_tam varchar(5)
);

create index idx_tam on tamanho (descricao_tam);

create table produto(
id_prod int auto_increment primary key,
nome_prod varchar(30),
id_cor int,
id_tam int,
id_tipo int,
id_modelo int,
id_marca int,
vl_prod decimal(10,2),
foreign key (id_cor) references cor (id_cor),
foreign key (id_tam) references tamanho (id_tam),
foreign key (id_tipo) references tipo (id_tipo),
foreign key (id_modelo) references modelo (id_modelo),
foreign key (id_marca) references marca (id_marca)
);

create index idx_prod on produto (nome_prod);
create index idx_vlprod on produto (vl_prod);

create table carrinho(
id_car int auto_increment primary key,
login_cli varchar(25),
dt_pedido_car datetime,
end_entrega_car varchar(60),
complemento_entrega_car varchar(20),
bairro_entrega_car varchar(20),
cidade_entrega_car varchar(20),
id_uf_est char (2),
id_pgto int,
vl_prod decimal(10,2),
vltotal_car decimal(10,2),
foreign key (login_cli) references cliente (login_cli),
foreign key (id_uf_est) references estado (id_uf_est),
foreign key (id_pgto) references pagamento(id_pgto),
foreign key (vl_prod) references produto(vl_prod)
);

create index idx_car on carrinho (end_entrega_car);

create table item_carrinho(
id_prod int,
id_car int,
qtdade_item integer,
vl_prod decimal(10,2),
vltotal_item numeric (10,2),
situacao_item char (1),
foreign key (id_prod) references produto (id_prod),
foreign key (id_car) references carrinho (id_car),
foreign key (vl_prod) references produto(vl_prod)
);

create table login(
login varchar(16),
senha varchar(30)
);

select * from modelo;
insert into produto(nome_prod, id_cor, id_tam, id_tipo, id_modelo, id_marca, vl_prod) values("a", "1", "1", "1", "1", "1", "1", 10,00);