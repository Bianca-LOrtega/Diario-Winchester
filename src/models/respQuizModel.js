var database = require("../database/config");

function registrarResposta(idUsuario, fkpergunta, acerto) {
    var instrucao = `
        INSERT INTO resp_quiz (fkusuario, fkpergunta, acerto) 
        VALUES (${idUsuario}, ${fkpergunta}, ${acerto});
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontuacao() {
    var instrucao = ` SELECT fkusuario, COUNT(*) AS qtd FROM resp_quiz
                        WHERE acerto = 1
                        GROUP BY fkusuario;
                    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarResposta,
    pontuacao
};