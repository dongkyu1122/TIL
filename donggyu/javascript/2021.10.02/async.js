function delay(ms) {
  return new Promise(resolve=> setTimeout(resolve, ms))
}

async function getApple() {
  await delay(3000)
  return '사과'
}

async function getBanana() {
  await delay(3000)
  return '바나나'
}

async function all() {
  const apple = await getApple()
  const banana = await getBanana()
    return `${apple} + ${banana}`
}

all().then(console.log)