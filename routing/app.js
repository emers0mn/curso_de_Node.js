const http = require('http');
const receitas = require('./receitas.js');

const servidor = http.createServer((req, res) =>{
    /// Primeiro temos que extrair o método ex:

    if(req.method === 'GET'){
        return pedido_URL(req, res);
    } else {
        return console.log(`O método usado foi ${req.method}, por isso pode ter ocorrido algo tipo de erro`);
    };
});

function pedido_URL(req, res){ 
    const path = req.url;

    if(path === '/') {
        res.statusCode = 200;
        res.end('Bem vindos ao meu primeiro servidor e API criado com Node.js')
    } else if(path === '/receitas') {
        res.statusCode = 200;
        res.end(JSON.stringify(receitas))
    } else {
        res.statusCode = 404;
        res.end('Pagina nao encontrada')
    }
}

const PORTA = 3300;

servidor.listen(PORTA, () => {
    console.log(`O servidor está aberto na porta ${PORTA}`)
});