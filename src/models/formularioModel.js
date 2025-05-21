var database = require("../database/config");

function cadastrar(fkusuario, perso_fav, perso_temido, temp_fav, text_area) {
    var instrucao = `
        INSERT INTO formulario (fkusuario, perso_fav, perso_temido, temp_fav, text_area) VALUES ('${fkusuario}','${perso_fav}','${perso_temido}','${temp_fav}','${text_area}');
    `;
    var valores = [fkusuario, perso_fav, perso_temido, temp_fav, text_area];

    console.log("Executando SQL segura: \n" + instrucao);
    return database.executar(instrucao, valores);
}


function personagens() {
    const sql = `
        SELECT UPPER(perso_fav) AS personagem, COUNT(*) AS qtd
        FROM formulario
        GROUP BY perso_fav;
    `;
    return database.executar(sql);
}

function personagensTemidos() {
    const sql = `
        SELECT UPPER(perso_temido) AS personagem, COUNT(*) AS qtd
        FROM formulario
        GROUP BY perso_temido;
    `;
    return database.executar(sql);
}

function temporadas() {
    const sql = `
        SELECT temp_fav AS temporada, COUNT(*) AS qtd
        FROM formulario
        GROUP BY temp_fav;
    `;
    return database.executar(sql);
}

function curiosidades() {
    const sql = `
        SELECT u.nome, f.text_area
        FROM formulario f
        JOIN usuario u ON f.fkusuario = u.id;
    `;
    return database.executar(sql);
}

module.exports = {
    cadastrar,
    personagens,
    personagensTemidos,
    temporadas,
    curiosidades
};
