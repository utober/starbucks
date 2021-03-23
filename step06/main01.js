import random from './getRandom'

// Arithmetic Operator : + - * / %
// Assignment Operator : const let = += -= *= /= %= 
// Comparison Operator : === !== < > <= >= 
function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1))   // true
console.log(isEqual(2, '2')) // false


// Logical Operator : && || ! 
// Ternary Operator : () ? () : ()
// IF Statement
  const a = random()
  if (a === 0) {
    console.log('a is 0')
  } else if (a === 2) {
    console.log('a is 2')
  } else {
    console.log('rest...')
  }


// Switch Statement
switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  default:
    console.log('rest...')
}


// For Statement (반복문)
{
  const ulEl = document.querySelector('ul')
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if ((i + 1) % 2 === 0) {
      li.addEventListener('click', () => {
        console.log(li.textContent)
      })
    }
    ulEl.appendChild(li)
  }
}


// Variable Scope
// 함수레벨: var
// 블록레벨: let, const
function scope() {
  if (true) {
    const aa = 123
    console.log(`aa :`,aa)
  }
}
scope()


// Type Conversion
{
  const a1 = 1
  const b1 = '1'
  console.log(a1 == b1)  // true  
  console.log(a1 === b1)  // false
}

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (true) { console.log('true') }     // true
if ('false') { console.log('true') }  // true

if (false) { console.log('true') }
if (0) { console.log('true') }
if (-0) { console.log('true') }
if ('') { console.log('true') }
if (null) { console.log('true')}
if (NaN) {console.log('true')}
if (1 + undefined) {console.log('true')} // 1 + undefined = null 


// Function
{
  function sum(x, y) {
    return x + y
  }
  const b2 = sum(2, 4)
  console.log(sum(1, 3))
  console.log(`b2`, b2)
  
  const sum2 = function (x,y) {
    return x + y
  }
  console.log(sum2(3, 5))
  
  function sum3(x, y) {
    if (x < 2) {
      return 
    }
    return x + y
  }
  console.log(sum3(1, 3)) // undefined
  
  function sum4() {
    console.log(arguments)
    return arguments[0] + arguments[1]
  }
  console.log(sum4(1, 2)) // 3
}


// 화살표 함수
// () => {} vs function () {}
{
  const double = function (x) {
    return x * 2
  }
  console.log(`double:`, double(7))

  const doubleArrow = (x) => {
    return x * 2
  }
  console.log(`doubleArrow:`, doubleArrow(2))
  const doubleArrow2 = x => x * 2
  console.log(`doubleArrow2:`, doubleArrow2(3))
}


// IIFE (Immediately-Invoked Function Expression)
{
  const a = 7;
  function double() {
    console.log(a * 2)
  }
  double(); // 세미콜론 필수 (즉시실행 함수 앞 위치시시

  (function () {
    console.log(a * 2)
  })();

  (function() {
    console.log(a * 3)
  }()); // 두번째 방법 권장
}


// Hoisting
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
{
  const a = 7
  // double();
  const double = () => console.log(a * 2);
  double()
}


// 타이머함수
// setTimeout(함수, 시간)
// setInterval(함수, 시간)
// clearTimeout()
// clearInterval()
{
/*
  const timer = setTimeout(() => {
    console.log('setTimeout')
  }, 3000)

  const h1El = document.querySelector('h1')
  h1El.addEventListener('click', () => {
    clearTimeout(timer)
  })

  const timer2 = setInterval(() => {
    console.log('setInterval')
  }, 1000)

  h1El.addEventListener('click', () => {
    clearInterval(timer2)
  })
}


// Callback
// 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)
{
  function timeout() {
    setTimeout(() => {
      // console.log('setTime...')
    }, 3000)
  }
  timeout()
  // console.log('Done!')
}
{
  function timeout(cb) {
    setTimeout(() => {
      console.log('setTime...')
      cb()
    }, 3000)
  }
  timeout(() => {
    console.log('Done!')
  })
*/
}  
console.clear()

// Class
{
  const heropy = {
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  console.log(heropy.getFullName())

  const amy = {
    firstName: 'Amy',
    lastName: 'Clarke',
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  console.log(amy.getFullName())

  const neo = {
    firstName: "Neo",
    lastName: 'Smith',
    getFullName: function(){
      return `${this.firstName} ${this.lastName}`}
  }
  console.log(neo.getFullName())
}
{
  function User(first, last) {
    this.firstName = first
    this.lastName = last
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
  }
  
  const heropy = new User('Heropy', 'Park')
  console.log(heropy)
  console.log(Object.prototype.toString.call(heropy).slice(8, -1))  // Object

  const amy = new User('Amy', 'Clarke')
  const neo = new User('Neo', 'Smith')
  console.log(amy)
  console.log(neo)

  console.log(heropy.getFullName())
  console.log(amy.getFullName())
  console.log(neo.getFullName())
}
{
  const a = [1, 2, 3]   // a 안에 prototype으로 만들어져 있는 메소드 : (ex) includes()
  console.log(a.includes(4))  // false
  console.log(a.includes(1))  // true
}


// This
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
{
  const heropy = {
    name: 'Heropy',
    normal: function () {
      console.log('01.normal:', this.name)
    },
    arrow: () => {
      console.log('arrow:', this.name)
    }
  }
  heropy.normal()   // Heropy
  // heropy.arrow()    // undefined

  const amy = {
    name: 'Amy',
    normal: heropy.normal,
    arrow: heropy.arrow
  }
  amy.normal()    // Amy  
  // amy.arrow()    // undefined
}
{
  function User(name) {
    this.name = name
  }
  User.prototype.normal = function () {
    console.log('02.prototpye-normal: ', this.name)
  }
  User.prototype.arrow = () => {
    console.log('02.prototype-arrow:', this.name)
  }

  const heropy = new User('Heropy')
  heropy.normal()     // Heropy
  // heropy.arrow()      // undefined
}
{
/*
  const timer = {
    name: 'Heropy!!',
    timeout: function () {
      setTimeout(function () {
        console.log('03.normal:', this.name)
      }, 1000)
    },
    timeoutArrow: function () {
      setTimeout(() => {
        console.log('03.arrow:', this.name)
      }, 2000)
    }

  }
  timer.timeout()       // undefined
  timer.timeoutArrow()  // Heropy!!
*/
}


// ES6 Classes
{
  const heropy = {
    name: 'Heopy',
    normal() {                    // function 생략
      console.log(this.name)
    },
    arrow: () => {
      console.log(this.name)
    }
  }
  heropy.normal()
  // heropy.arrow()
}
{ 
/*
  function User(first, last) {
    this.firstName = first
    this.lastName = last
  }
  User.prototype.getFullName = function () {
    return `04. ${this.firstName} ${this.lastName}`
  }
*/
  class User {
    constructor(first, last) {
      this.firstName = first
      this.lastName = last
    }
    getFullName() {
      return `05. ${this.firstName} ${this.lastName}`
    }
  }
  
  const heropy = new User('Heropy', 'Park')
  const amy = new User('Amy', 'Clarke')
  console.log(heropy.getFullName())
  console.log(amy.getFullName())
}


// 상속, 확장
{
  class Vehicle {
    constructor(name, wheel) {
      this.name = name
      this.wheel = wheel
    }
  }
  const myVehicle = new Vehicle('운송수단', 2)
  console.log('06.', myVehicle)

  class Bicycle extends Vehicle {
    constructor(name, wheel) {
      super(name, wheel)
    }
  }
  const myBicycle = new Bicycle('삼천리', 2)
  const daughtersBicycle = new Bicycle('세발', 3)
  console.log('07', myBicycle)
  console.log('07', daughtersBicycle)

  class Car extends Vehicle {
    constructor(name, wheel, license) {
      super(name, wheel)
      this.license = license
    }
  }
  const myCar = new Car('벤츠', 4, true)
  const daughtersCar = new Car('포르쉐', 4, false)
  console.log('08', myCar)
  console.log('08', daughtersCar)
}
