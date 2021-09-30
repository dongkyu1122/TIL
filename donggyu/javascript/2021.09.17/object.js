//객체

const name = 'clack'
const age = 20

const superman = {
  name,
  age,
  gender: 'male'
}
superman.hobby = 'football'
superman['haircolor']='black'


function makeObject(name, age) {
  return {
    name,
    age
  }
}

const mike = makeObject('mike', 30  )
console.log(mike)