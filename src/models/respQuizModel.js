var database = require("../database/config");

function registrarResposta(fkusuario, fkpergunta, acerto) {
    var instrucao = `
        INSERT INTO resp_quiz (fkusuario, fkpergunta, acerto) 
        VALUES (${fkusuario}, ${fkpergunta}, ${acerto});
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarResposta
};