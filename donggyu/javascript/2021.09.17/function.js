//호이스팅
sayHello()

function sayHello() {
  console.log('hello')
}

//호이스팅불가
var sayBye = function() {
  console.log('bye')
}
sayBye()

//세개다 같은 표현
var add = function(num1, num2) {
  return num1 + num2
}

var add = (num1, num2) => {
  return num1 + num2
}

var add = (num1, num2) => (
  num1 + num2
)
var add  = (name) => `hello ${name}`


var adds = (add(1, 2))
console.log(adds)

var plus = () => {
  console.log('hi')
}
plus()