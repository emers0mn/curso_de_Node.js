const express = require('express');
const app = express();

const {receitas} = require('./receitas.js');

app.get('/', (req, res) => {
    
    res.send('Meu primeiro servidor feito com Express 😯');
});

app.get('/api/receitas', (req, res) => {
    res.send(JSON.stringify(receitas))
});

app.get('/api/receitas/bolo-simples', (req, res) => {
    res.send(receitas.bolo[0])
});

app.get('/api/receitas/bolo-cenoura', (req, res) => {
    res.send(receitas.bolo[1])
});

const PORTA = process.env.PORT || 3100;

app.listen(PORTA, () => {
    console.log(`O Servidor está aberto na porta ${PORTA}`)
})