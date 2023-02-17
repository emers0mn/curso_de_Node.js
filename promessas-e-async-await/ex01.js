async function countDown(num) {
  for(let i = num; i >= 0; i--) {
    console.log(i);
    await new Promise(resolve => {
      setTimeout(resolve, 1000)
    });
  }
}

async function runCountDown(num) {
  await countDown(num);
  console.log('Fim da contagem')
}

runCountDown(5)