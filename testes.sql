create table usuario (
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

create table situacao (
    nomeSituacao VARCHAR(45)
);

create table categoria (
    nomeCategoria VARCHAR(45)
);

create table chamados (
    id  INTEGER NOT NULL auto_increment,
    titulo VARCHAR(45),
    descricao VARCHAR(45),
    prazoSolucao DATETIME,
    dataCriacao DATETIME,
    dataSolucao DATETIME,
    createdAt   DATETIME,
    updatedAt DATETIME
);

insert into usuario(nome, email, senha) VALUES (
    'vitor',
    'vitor@gmail.com',
    '123'    
);

insert into categoria (nomeCategoria) VALUES (
    'CategoriaTeste'
);

insert into situacao (nomeSituacao) VALUES (
    'SituacaoTeste'
);

insert into chamados (titulo, descricao, prazoSolucao, dataCriacao) VALUES (
    'tituloTeste',
    'descricaoTeste',
    '2023-08-23 00:00:00',
    '2023-08-22 00:00:00'

);