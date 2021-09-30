function item(title, price) {
  this.title = title
  this.price = price
  this.showItem = function() {
    console.log(`${title}의 가격은 ${price}원 입니다`)
  }
}

let item1 = new item('가방', 3000)
let item2 = new item('인형', 4000)
let item3 = new item('지갑', 5000)

item1.showItem()