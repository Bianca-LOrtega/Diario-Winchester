const express = require("express");
const router = express.Router();
const formularioController = require("../controllers/formularioController");

router.post("/", formularioController.cadastrar);

router.post("/cadastrar", function (req, res) {
    formularioController.cadastrar(req, res);
});


module.exports = router;
