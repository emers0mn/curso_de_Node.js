function getNumber(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
};

function squareNumber(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 2000)
  } )
};

async function resultado(num) {
  try {
    const numero = await getNumber(num);
    console.log(`O número indicado é: ${numero}`);
    const resultadoResolvido = await squareNumber(numero)
    console.log(`E o quadrado desse número é: ${resultadoResolvido}`)

  } catch(error) {
    console.log(error)
  }
}

resultado(5)