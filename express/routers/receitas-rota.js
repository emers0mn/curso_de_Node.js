const express = require('express');
const receitasRotas = express.Router();
const tiposRotas = express.Router();
const receitas = require('../receitas.js')


receitasRotas.get('/', (req, res) => {
    res.json(receitas)
});

module.exports = receitasRotas;
