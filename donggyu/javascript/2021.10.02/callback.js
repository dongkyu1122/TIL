function delay(print, timeout) {
  setTimeout(print, timeout)
}

delay(() => console.log('hi'), 3000)

