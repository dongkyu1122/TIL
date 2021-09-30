//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  speak() {
    console.log(`${this.name}: hello!`)
  }
}

const donggyu = new Person('donggyu', 21);
console.log(donggyu.name)
console.log(donggyu.age)
donggyu.speak()

//getter & setter
// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   get age() {
//     return this._age
//   }

//   set age(value) {
//     if(value<0) {
//       throw Error('머함')
//     }
//     this._age = value
//   }
// } 

// const user1 = new User('steve', 'job', -1)
// console.log(user1.age)

// Fields(public, private)
class Experiment {
  publicField = 2
  #privateField = 0
}
const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)

//static
class Article {
  static publisher = 'dream coding'
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }

  static printPublisher() {
    console.log(Article.publisher)
  }
}

const article1 = new Article(1)
const article2 = new Article(2)
console.log(Article.publisher)

//상속과 다양성
class Shape {
  constructor(name,width, height, color) {
    this.name = name
    this.width = width
    this.height = height 
    this.color = color
  }

  draw() {
    console.log(`${this.name} drawing ${this.color} color!`)
  }

  getArea() {
    return console.log(this.width * this.height)
  }
}

class Rectangle extends Shape {
  
}

class Triangle extends Shape {
  getArea() {
    return console.log((this.width * this.height) / 2)
  }
}

const rectangle = new Rectangle('사각형', 20, 20, 'blue')
rectangle.draw()
rectangle.getArea()
const triangle = new Triangle('삼각형',20,20, 'red')
triangle.draw()
triangle.getArea()