-- modelo de dados --Diario Winchester

create database diario;
use diario;

create table usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table quiz (
	id int PRIMARY KEY AUTO_INCREMENT,
	pergunta varchar(90)
);

create table resp_quiz (
	fkpergunta int,
	fkusuario int,
	acerto tinyint,
	FOREIGN KEY (fkpergunta) REFERENCES quiz(id),
	FOREIGN KEY (fkusuario) REFERENCES usuario(id),
	PRIMARY KEY (fkpergunta, fkusuario)
); -- quiz - resposta n:n 

create table formulario (
	id int PRIMARY KEY AUTO_INCREMENT,
	fkusuario int,
	perso_fav varchar(80),
	perso_temido varchar(80),
	temp_fav int,
	text_area varchar(500),
	FOREIGN KEY (fkusuario) REFERENCES usuario(id) 
); 

-------------------------------


insert into quiz (pergunta) values
				("Qual o nome do carro clássico dirigido por Dean Winchester?"),
				("Quem é o anjo que se torna aliado dos Winchester?"),
				("Qual é o nome do pai de Sam e Dean?"),
				("Qual é o apelido do demônio Crowley?"),
				("Qual é o nome do demônio que possui a alma de Sam?"),
				("Qual das seguintes opções é uma arma que pode matar quase tudo?"),
				("Qual é o nome do profeta que escreve os livros 'Supernatural'?"),
				("Quem é o Cavaleiro do Inferno que Dean enfrenta com a Primeira Lâmina?"),
				("Quem é o Nephilim filho de Lúcifer?"),
				("Qual é a profissão dos irmãos como fachada?");
