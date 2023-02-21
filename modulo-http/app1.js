const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ola, mundo!');
});

const porta = 3000

servidor.listen(porta, () => {
    console.log(`O servidor está te escutando na porta ${porta}...`)
})

