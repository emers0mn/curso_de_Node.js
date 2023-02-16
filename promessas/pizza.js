const meuPedido = new Promise((resolve, reject) => {
    const statusPedido = () => {
        return Math.random() < 0.8;
    };
    setTimeout(() => {
        if (statusPedido()) {
            resolve('Pedido feito com sucesso, pizza a caminho');
        } else {
            reject('Deu ruim, refaça o pedido');
        }
    }, 3000);
})
meuPedido
    .then((feito) => {
        return feito + 1
    }).then((feito) => {
        console.log(feito)
    })
    .catch((erro) => {
        console.log(erro)
    });