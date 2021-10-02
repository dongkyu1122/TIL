console.log('1')
setTimeout(() => console.log(2))
console.log('3')
function printI(print) {
  print()
}
printI(() => console.log('hello'))

function printWithDeley(print, timeout) {
  setTimeout(print, timeout)
}

printWithDeley(() => console.log('async callback'), 3000)

function promptDeley(print, timeout) {
  setTimeout(print, timeout)
}

promptDeley(() => prompt('안녕하세요'), 3000)
var pro = prompt()
if(pro <= 19) {
  console.log('1')
} else {
  console.log('2')
}

function delay(print, timeout) {
  setTimeout(print, timeout)
}

delay(() => console.log('hi'), 2000)

function hi(print, timeout) {
  setTimeout(print, timeout)
}

hi(() => console.log('1'), 1000)

function timeout(print, timeout) {
  setTimeout(print, timeout)
}