var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// Rota de cadastro
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

// Rota de login
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Rota para buscar personagem favorito de um usuário
router.get("/personagem/:idUsuario", function(req, res){
    usuarioController.buscarPersoPorId(req, res);
});

module.exports = router;