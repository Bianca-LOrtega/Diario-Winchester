var database = require("../database/config");

function registrarResposta(idUsuario, fkpergunta, acerto) {

    idUsuario = Number(idUsuario);
    fkpergunta = Number(fkpergunta);
    acerto = Number(acerto);


    var instrucao = `
        INSERT INTO resp_quiz (fkusuario, fkpergunta, acerto) 
        VALUES (${idUsuario}, ${fkpergunta}, ${acerto});
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontuacao() {
    var instrucao = ` SELECT rq.fkusuario, rq.COUNT(*) AS qtd, u.nome FROM resp_quiz rq
                        inner join usuario as u on u.id = rq.fkusuario
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