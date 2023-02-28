const http = require('http');
const receitas = require('./receitas.js');

const servidor = http.createServer((req, res) =>{
    /// Primeiro temos que extrair o método ex:

    if(req.method === 'GET'){
        return pedido_GET(req, res);

    } else if(req.method === 'POST') {
        return pedido_POST(req, res);
    } else{ 
        res.writeHead(501);
        res.end(`O método não pode ser utilizado pelo serviro ${req.method}`)
    };
});

function pedido_GET(req, res){ 
    const path = req.url;

    if(path === '/') {
        res.statusCode = 200;
        return res.end('Bem vindos ao meu primeiro servidor e API criado com Node.js')
    } else if(path === '/receitas') {
        res.statusCode = 200;
        res.end(JSON.stringify(receitas))
    } else {
        res.statusCode = 404;
        res.end('Pagina nao encontrada')
    }
}

function pedido_POST(req, res){
    if(req.url === '/receitas/bolo'){
        res.statusCode = 200;
        return res.end('O servidor recebeu uma solicitação POST /receitas/bolos')
    }
}

const PORTA = 3300;

servidor.listen(PORTA, () => {
    console.log(`O servidor está aberto na porta ${PORTA}`)
});