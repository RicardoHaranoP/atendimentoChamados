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
    titulo VARCHAR(45),
    descricao VARCHAR(45),
    prazoSolucao DATETIME,
    dataCriacao DATETIME,
    dataSolucao DATETIME
);