//두가지이해하자                      함수는 두가지 타입이있다.
//1. 함수선언                       1. 그냥 전달하는 함수 
//2 함수호출                        2. 값을 리턴하는 함수


//함수선언
function anyThing(add) {
  console.log(add)
  var result = add(2, 3);
  console.log(result)
}

function add(a, b) {
  const sum = a + b
  return sum
}

//함수호출
var result = add(1, 3)
anyThing(add)