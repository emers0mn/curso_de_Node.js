const express = require('express');
const tiposRotas = express.Router();
const receitas = require('../receitas.js')


tiposRotas.get('/:tipo', (req, res) => {

    const tipo = req.params.tipo;
    const { bolos } = receitas;
    const resultado = bolos.filter(bolo => bolo.tipo === tipo);

    res.json(resultado)
});

module.exports = tiposRotas;
