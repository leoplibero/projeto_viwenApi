create database viewen_DB;

use viewen_DB;

create table usuarios(
 id int primary key auto_increment,
 nome varchar(100) not null,
 email varchar(100) unique not null,
 senha varchar(255) not null,
 ativo boolean default true,
 data_criacao timestamp default current_timestamp,
 data_atualizacao timestamp default current_timestamp on update current_timestamp
);

insert into usuarios (nome, email, senha)
values('Mateus Rodrigues', 'mateus@viewen.com.br', 'admin1');


select * from usuarios
