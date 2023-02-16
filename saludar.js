function saludar(nombre){
    return `Hola, ${nombre}`;
}

function calcular(n1, n2){
    return `Sabia que ${n1} + ${n2} é igual a: ${n1 + n2}?`;
}

module.exports = {
    saludar: saludar,
    calcular: calcular
}