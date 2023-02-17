async function calcularSum(num1, num2) {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(num1 + num2);
        }, 1000);
    })
};

async function calculateAndLogSum(num1, num2) {
    const resultado = await calcularSum(num1, num2);
    console.log(`A soma entre ${num1} + ${num2} é: ${resultado}`)
    console.log('Fim da soma')
}

calculateAndLogSum(5, 10)

