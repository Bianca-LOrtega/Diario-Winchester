var respQuizModel = require("../models/respQuizModel");

function registrarRespostas(req, res) {
    var { fkusuario, respostas } = req.body;  

    if (!fkusuario || !Array.isArray(respostas) || respostas.length == 0) {
        return res.status(400).send("Faltando dados ou respostas inválidas!");
    }

    // acertos do usuário 
    var totalAcertos = respostas.filter(r => r.acerto === 1).length;

    // Registrar cada resposta no banco
    let promises = respostas.map(resposta => {
        return respQuizModel.registrarResposta(fkusuario, resposta.fkpergunta, resposta.acerto);
    });

    Promise.all(promises)
        .then(() => {
            res.status(200).json({
                mensagem: "Respostas registradas com sucesso!",
                acertos: totalAcertos
            });
        })
        .catch(erro => {
            res.status(500).json(erro.sqlMessage);
        });
}

function pontuacao(req, res) {
    respQuizModel.pontuacao()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarRespostas,
    pontuacao
};
