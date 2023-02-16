const EventEmitter = require('events');
const emissorProdutos = new EventEmitter();

let valorProduto = 800;

emissorProdutos.on('compra', (valor) => {
    console.log(`Compra realizada com sucesso $${valor}`);

});

emissorProdutos.emit('compra', valorProduto);