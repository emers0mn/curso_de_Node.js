const http = require('http');

const servidor = http.createServer((req, res) => {
    
    if(req.url == '/bolo') {
        const info = {
            bolo: 'bolo bom da porra',
            path: 'emerson'
        };  
        res.end(info.bolo);
    } else {
        const info = {
            nome: 'Emerson',
            path: 'emerson'
        };  
        res.end(info.nome);
    };

    console.log(req.url)
});

const PORTA = 8080;

servidor.listen(PORTA, () => {
    console.log(`Está escuntando na porta http://localhost:${PORTA}`);
});

