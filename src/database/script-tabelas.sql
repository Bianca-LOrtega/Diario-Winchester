-- modelo de dados --Diario Winchester

create database diario;
use diario;

create table usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

create table resp_quiz (
	id int PRIMARY KEY AUTO_INCREMENT,
	fkusuario int,
	pontuacao decimal(7,3),
	data date,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id) 
); -- quiz - resposta n:n 

create table formulario (
	id int PRIMARY KEY AUTO_INCREMENT,
	fkusuario int,
	perso_fav varchar(80),
	perso_temido varchar(80),
	temp_fav varchar(80),
	text_area varchar(500),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id) 
); -- esse vai para usuario

-------------------------------
