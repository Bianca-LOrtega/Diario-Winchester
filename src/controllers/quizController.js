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

function pontuacao( req, res) {
    respQuizModel.pontuacao()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("ERRO ao buscar pontuação: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function erros (req, res) {
    respQuizModel.erros()
        .then(function(resultado){
            if(resultado.length >0 ){
                res.status(200).json(resultado);
            }
            else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("ERRO ao buscar pontuação: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarResposta,
    pontuacao, 
    erros
};
