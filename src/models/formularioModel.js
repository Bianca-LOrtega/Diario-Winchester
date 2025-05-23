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
        SELECT perso_fav AS perso_fav, COUNT(*) AS qtd
        FROM formulario
        GROUP BY perso_fav
        limit 4;
    `;
    return database.executar(sql);
}

function personagensTemidos() {
    const sql = `
        SELECT perso_temido as perso_temido, COUNT(*) AS qtd
        FROM formulario
        GROUP BY perso_temido
        limit 4;
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
        SELECT u.nome as usuario , f.text_area as text_area
        FROM formulario as f
        left join usuario as u on u.id = f.fkusuario
        group by usuario, text_area;
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
