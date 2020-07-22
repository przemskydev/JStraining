import * as module from './scrip2.js';

// for (let i = 1; i <= 20; i++) {
//   let num = '';

//   //#1
//   (!(i % 3)) ? num = "Fizz" : '';
//   //#2
//   (!(i % 5)) ? num += "Buzz" : '';
//   //#3
//   (!num) ? num = i : '';

//   console.log(num)
// }

/*

#1
Needed 'true' value in if conditional. 
Before the final version I had ( i%3 === 0 ) and thats given 'true' value.
Change to ( i%3 ) gives 0- falsy... 0==true //false, 0==false //true
Nessecary was adding "!" to get truthy
#2
Variable 'num' at the beginning every iteration is an empty string.
If conditional is true, num has "Fizz" or "Buzz" string value.
In case when both condition are true, using addition assignment operator (+=) 
add word "Buzz" to the before added in previous conditional word "Fuzz" 
(Both were true, so num has string "Fizz" in second conditional)
#3
At the beginning every iteration, "num" is an empty string.
Empty string "" is falsy.
Condional checking if num is empty, assign to it "i" value

*/

// function Person(firstName, lastName, age, city, hobby) {
//   this.name = {
//     first: firstName,
//     last: lastName
//   };
//   this.age = age;
//   this.city = city;
//   this.bio = () => {
//     console.log(`Citizen ${this.name.first} ${this.name.last}, age ${this.age} from ${this.city} is OK`)
//   }
//   this.hobby = hobby;
//   this.sayHello = () => {
//     console.log(`Hi, my name is ${this.name.first} and I like ${this.hobby.join(', ')}.`)
//   }
// }

class Person {
  constructor(first, last, age, city, hobby) {
    this.name = {
      first: first,
      last: last
    };
    this.age = age;
    this.city = city;
    this._hobby = hobby;
  }

  bio() {
    console.log(`Citizen ${this.name.first} ${this.name.last}, age ${this.age} from ${this.city} is OK`)
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name.first} and I like ${this._hobby.join(', ')}.`)
  }

  get fullName() {
    console.log(`${this.name.first} ${this.name.last}`)
  }

  get hobby() {
    console.log(this._hobby)
  }

  set hobby(newHobby) {
    this._hobby = [...this._hobby, newHobby]
  }

  static ageCompare() {
    console.log(`Age will be compared`)
  }

}

const user1 = new Person("Joe", 'Doe', 31, 'NYC', ['music', 'movies', 'sport'])
const user2 = new Person("Dan", 'Bam', 21, 'Chicago', ['cheese', 'nuts', 'salt']);

const user3 = new Object();

user3.name = "Beniz";
user3.age = 11;
user3.sayHello = function () {
  console.log(`Hi there, I am ${this.name} and ${this.age} y.o.`)
}

const user4 = Object.create(user1)

Person.prototype.sayBye = function () {
  console.log(`Person ${this.name.first} has left the office`)
}

// function Teacher(first, last, age, city, hobby, subiect) {
//   Person.call(this, first, last, age, city, hobby)

//   this.subiect = subiect
// }

class Teacher extends Person {
  constructor(first, last, age, city, hobby, subiect) {
    super(first, last, age, city, hobby)
    this._subiect = subiect
  }

  get subiect() {
    console.log(this._subiect)
  }

  set subiect(newSubiect) {
    this._subiect = newSubiect
  }
}

const bio = new Teacher('Alice', 'Moose', 54, "Lublin", ["bio", "diesl"], 'Biology')

function createUser(name, age) {
  return {
    name,
    age,
    checkAge() {
      this.age >= 18 ? console.log(true) : console.log(false)
    },
    [`user${name}${age}`]: 'checked'
  }
}

const user5 = createUser('Bart', 17)

class Student extends Teacher {
  constructor(first, last, age, city, hobby, subiect, classGroup) {
    super(first, last, age, city, hobby, subiect)
    this._classGroup = classGroup
  }

  get studentClass() {
    console.log(this._classGroup)
  }

  set studentClass(newClass) {
    this._classGroup = newClass
  }

}

const st = new Student('Christian', 'Paul', 32, 'Los Angeles', ['fasion', 'modeling', 'byznes'], 'Math', 'BioMath');

class Square {
  constructor(sideLength) {
    this.name = "square",
      this.sides = 4,
      this.sideLength = sideLength
  }

  calcPerimeter(b = this.sideLength) {
    console.log(this.sides * b)
  };

  calcArea() {
    console.log(Math.pow(this.sideLength, 2))
  }
}

const square = new Square(7)
square.calcPerimeter()
square.calcArea()

square.calcPerimeter(9)

let products = [];

fetch('./data/MOCK_DATA.json')
  .then(response => {
    return response.json()
  })
  .then(json => {
    products = json
    products.map(({ first_name, last_name, city, car_model }) => {
      // console.log(`Person ${first_name} ${last_name} from ${city} has car model: ${car_model}`)
    })
  })
  .catch(err => console.log(err))

const { env, helloModule } = module
// console.log(env)
// console.log(helloModule())

const target = {};

const handler = {
  get: (target, name) => {
      return name in target ?
          target[name] :
          420;
  }
};

const p = new Proxy(target, handler);
p.a = 1;

console.log('last' in p, p.last); // false, 37


const num1 = Math.random() * 10
console.log(num1)