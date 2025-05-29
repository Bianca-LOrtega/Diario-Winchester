<img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">

# Diário dos Winchesters

**Projeto desenvolvido por Bianca Lopes Ortega para o curso de Ciência da Computação da SPTECH.**  
Disciplina: Pesquisa e Inovação • 1º semestre • 2025

---

## 🕯 Sobre o Projeto

Este projeto consiste na criação de um site informativo e interativo baseado na série **Supernatural**, integrando elementos técnicos de desenvolvimento web com reflexões pessoais, sociais e narrativas.

O site oferece uma experiência envolvente, incluindo:
- Conteúdo sobre personagens, episódios e criaturas;
- Quiz personalizado para identificar afinidades com os personagens;
- Formulário interativo com armazenamento de preferências do usuário;
- Dashboard de visualização de dados com gráficos dinâmicos;
- Design inspirado na estética dark/retrô da série.

---

## 🧩 Tecnologias Utilizadas

- **Front-End:** HTML5, CSS3, JavaScript
- **Back-End:** Node.js (Express)
- **Banco de Dados:** MySQL (local e VM Linux)
- **Dashboard:** Chart.js
- **Controle de Versão:** Git + GitHub
- **Planejamento:** Trello
- **Hospedagem Local:** Ambiente com `npm start`

---

## ⚙ Como Executar Localmente

1. Clone este repositório:

   git clone https://github.com/Bianca-LOrtega/Diario-Winchester.git

Acesse a pasta do projeto e instale as dependências:
npm install


Configure o ambiente no arquivo .env:
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=diario
DB_PORT=3306
AMBIENTE_PROCESSO=desenvolvimento


Crie o banco de dados:

Execute o script script-tabelas.sql em seu MySQL Workbench ou terminal.

Inicie o projeto:
npm start

Abra o navegador no endereço informado (geralmente http://localhost:3333).