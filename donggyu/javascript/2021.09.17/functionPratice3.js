var fruit = () => {
  console.log('hi')
}
fruit()

function person(name, age) {
  return {
    name,
    age,
  }
}
const mike = person('mike', 30)
console.log(mike)