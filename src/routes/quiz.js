var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Registrar respostas e calcular os acertos
router.post("/registrarResposta", function (req, res) {
    quizController.registrarResposta(req, res);
});

router.post("/pontuacao", function ( res) {
    quizController.pontuacao( res);
});

module.exports = router;
