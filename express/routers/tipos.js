const express = require('express');
const tiposRotas = express.Router();
const {receitas: {bolos}} = require('../receitas.js')


tiposRotas.get('/:tipo', (req, res) => {
    const {tipo} = req.params;
    const resultado = bolos.filter(bolo => bolo.tipo === tipo);

    res.json(resultado)
});

module.exports = tiposRotas;
