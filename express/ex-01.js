/*
Ex-01:

Crie uma rota no Express que recebe um parâmetro nome pela URL e retorna uma mensagem de saudação personalizada com o nome fornecido.

Por exemplo, se a rota for /ola/:nome, quando o usuário acessar a URL /ola/Maria, a mensagem de retorno deverá ser: "Olá, Maria!".

Dica: você pode usar o objeto req.params para acessar os parâmetros fornecidos na URL.*/

const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Está funcionando numa boa')
});

app.get('/ola/:nome', (req, res) =>{
    const { nome } = req.params;
    const resposta = `olá, ${nome}`;

    res.send(resposta);
});

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`O servidor está aberto na porta ${PORTA}`)
});