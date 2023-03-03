const express = require('express');
const app = express();

const receitasRotas = require('./receitas-rota');
const tiposRotas = require('./tipos');


app.use('/', receitasRotas);
app.use('/receitas', tiposRotas);

app.listen(3100, () => {
    console.log('Está funcionando')
})