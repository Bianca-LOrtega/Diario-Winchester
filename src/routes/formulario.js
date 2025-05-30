const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formularioController");

router.post("/", formularioController.cadastrar);

router.post("/cadastrar", function (req, res) {
    formularioController.cadastrar(req, res);
});


router.get("/personagens", formularioController.personagens);
router.get("/personagensTemidos", formularioController.personagensTemidos);
router.get("/temporadas", formularioController.temporadas);
router.get("/curiosidades", formularioController.curiosidades);
router.get("/totalParticipantes", function(req, res){
    formularioController.totalParticipantes(req, res)
})


module.exports = router;
