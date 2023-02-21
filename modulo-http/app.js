const http = require('http');

const servidor = http.createServer((req, res) => {
    
    const info = {
        nome: 'Emerson',
        path: 'emerson'
    };  
    res.end(info.nome);

    console.log(req.headers)
});

const PORTA = 8080;

servidor.listen(PORTA, () => {
    console.log(`Está escuntando na porta http://localhost:${PORTA}`);
});

