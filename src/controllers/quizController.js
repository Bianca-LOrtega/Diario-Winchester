var respQuizModel = require("../models/respQuizModel");

function registrarResposta(req, res) {
    var fkpergunta = req.body.fkpergunta;
    var acerto = req.body.acerto;
    var idUsuario = req.body.idUsuario;

    console.log("Dados recebidos:", idUsuario, fkpergunta, acerto);

    respQuizModel.registrarResposta(idUsuario, fkpergunta, acerto)
        .then(() => {
            res.status(200).json({
                mensagem: "Resposta registrada com sucesso!"
            });
        })
        .catch(erro => {
            console.error("Erro ao registrar resposta:", erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

function pontuacao( res) {
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
    registrarResposta,
    pontuacao
};
