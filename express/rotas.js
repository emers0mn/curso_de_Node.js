const express = require('express');
const app = express();
const receitasRotas = express.Router();
const tiposRotas = express.Router();
const {receitas} = require('./receitas.js');

app.use('/', receitasRotas);
app.use('/receitas', tiposRotas);

receitasRotas.get('/', (req, res) => {
    const { bolos } = receitas;
    
    res.json(bolos)
})

tiposRotas.get('/:tipo', (req, res) => {
    const { tipo } = req.params;
    
    res.json(receitas.bolos.filter(bolo => bolo.tipo === tipo));
});

app.listen(3100, () => {
    console.log('Está funcionando de boa...')
});