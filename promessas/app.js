const promessa = true

const minhaPromessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promessa) {
            resolve('Promessa comprida')
        } else {
            reject('Promessa recusada por...')
        }
    }, 3000)
});

const aceita = (valor) => {
    console.log(valor)
};

minhaPromessa.then(aceita, aceita);

console.log(minhaPromessa)

