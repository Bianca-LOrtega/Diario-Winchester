var formularioModel = require("../models/formularioModel");

function cadastrar(req, res) {
    var { fkusuario, perso_fav, perso_temido, temp_fav, text_area } = req.body;

    if (!fkusuario || !perso_fav || !perso_temido || !temp_fav || !text_area) {
        return res.status(400).send("Todos os campos do formulário são obrigatórios.");
    }

    formularioModel.cadastrar(fkusuario, perso_fav, perso_temido, temp_fav, text_area)
        .then(() => {
            res.status(200).send("Formulário registrado com sucesso.");
        })
        .catch((erro) => {
            console.error("Erro ao cadastrar formulário:", erro); // <- MANTÉM ESSA LINHA
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}


function personagens(req, res) {
    formularioModel.personagens()
        .then(result => res.json(result))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function personagensTemidos(req, res) {
    formularioModel.personagensTemidos()
        .then(result => res.json(result))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function temporadas(req, res) {
    formularioModel.temporadas()
        .then(result => res.json(result))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function curiosidades(req, res) {
    formularioModel.curiosidades()
        .then(result => res.json(result))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function totalParticipantes(req,res){
    formularioModel.totalParticipantes()
        .then(result => res.json(result))
        .catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar,
    personagens,
    personagensTemidos,
    temporadas,
    curiosidades,
    totalParticipantes
};
