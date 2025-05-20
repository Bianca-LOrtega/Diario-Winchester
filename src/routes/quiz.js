var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Registrar respostas e calcular os acertos
router.post("/registrar", function (req, res) {
    quizController.registrarRespostas(req, res);
});

module.exports = router;
