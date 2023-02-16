const getNumber = (num) =>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num)
        }, 1000);
    });
}

const squareNumber = (num) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 2000);
    });
}

getNumber(5)
    .then(num => {
        return squareNumber(num);
    })
    .then(resultado => {
        console.log(resultado);
    }).catch(erro => {
        console.log(erro);
    })