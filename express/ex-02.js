/*
Ex-02:

Crie uma rota no Express que receba um parâmetro obrigatório id como número inteiro e um parâmetro opcional nome como string. A rota deve retornar uma mensagem de confirmação com o ID e o nome fornecidos, caso ambos os parâmetros sejam fornecidos e o ID seja um número inteiro válido.

Por exemplo, se a rota for /produto/:id/:nome?, quando o usuário acessar a URL /produto/123/ProdutoX, a mensagem de retorno deverá ser: "Produto com ID 123 e nome ProdutoX confirmado." Se o usuário acessar a URL /produto/abc/ProdutoX, a mensagem de retorno deverá ser um erro de tipo inválido para o parâmetro id.

Dica: você pode usar o método Number.isInteger() para validar o tipo do parâmetro id como um número inteiro.*/

const express = require('express');
const app = express();

app.get('/aluno/:id/:nome', (req, res) => {
    const { id, nome } = req.params;

    if(isNaN(id) | Number.isInteger(id)){
        return res.send('Erro, ID deve ser escrito apenas com um número inteiro')
    }

    res.send(`CONFIRMADO: Aluno ${nome}, recebeu o ID: ${id}`)
})



const PORTA = 3100;
app.listen(PORTA, () => {
    console.log(`O servidor está aberto na porta ${PORTA}`);
});