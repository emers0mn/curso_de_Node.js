const express = require('express');
const app = express();

const {receitas} = require('./receitas.js');

const rotaReceitas = express.Router();
app.use('/receitas', rotaReceitas)

rotaReceitas.get('/', (req, res) => {
    const { bolos } = receitas;
    
    if(req.query.tipo) {
        const tipo = req.query.tipo;
        const resultado = bolos.filter(bolo => bolo.tipo === tipo);
        
        res.json(resultado)
    }else {
        res.json(bolos)
    }

});

rotaReceitas.get('/:tipo', (req, res) => {
    const tipo = req.params.tipo || 'default';
    const resultado = receitas.bolos.filter(bolo => bolo.tipo === tipo); /// bolo => é uma função flecha que fiz que bolo vai receber ele e algo se o que está sendo analisando for verdade

    if(resultado.length === 0) {
        return res.status(404).send('Deu ruim')
    }

    res.json(resultado);
})

const PORTA = 3200;

app.listen(PORTA, () => {
    console.log(`Está funcionando corretamente na porta http//:localhost:${PORTA}`);
});