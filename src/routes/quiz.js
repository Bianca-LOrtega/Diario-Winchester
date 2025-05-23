var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Registrar respostas e calcular os acertos
router.post("/registrarResposta", function (req, res) {
    quizController.registrarResposta(req, res);
});

router.get("/pontuacao", function ( req, res) {
    quizController.pontuacao( req, res);
});

router.get("/erros", function (req, res) {
    quizController.erros(req, res)
});

module.exports = router;
