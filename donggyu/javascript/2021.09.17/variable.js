//변경가능한 변수 let
let name = 'donggyu'
let age = 20
let message = 'my name is' + name + '나이는' + age
console.log(message) 

//한번 선언하면 변경 절대 불가한 const
const i = 'my name'
const is = 'is donggyu'
const message2 = i + is
console.log(message2)

//``이건 문자안에 변수를 넣을때 유용하다 
const message3= `My name is ${name} age is ${age}`

console.log(message3)

//바로 표현식넣기 가능
const message4 = `나는 ${20+1}살 입니다.`
console.log(message4)

//type of 변산자 
console.log(typeof 3);
console.log(typeof name)
console.log(typeof true)
console.log(typeof "XXX")
console.log(typeof null)
console.log(typeof undefined)
