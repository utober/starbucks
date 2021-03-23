import _ from 'lodash'

// JS Data
// String, Number, Boolean, undefined, null, Array, Object

// String.prototype.indexOf()
// 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
// 일치하는 값이 없으면 -1을 반환합니다. 
{
  const a = 'Hello world!'.indexOf('world')
  const b = 'Hello world!'.indexOf('heropy')
  console.log('01.', a) // 6
  console.log('02.', b) // -1 
}
{
  const str = '0123'
  console.log('03', str.length) // 4
}
{
  const str = 'Hello world!'
  console.log('04', str.indexOf('Hello')) // 0
  console.log('05', str.indexOf('HEROPY') !== -1) // false

  // slice(시작인덱스, 종료인덱스)
  console.log('06', str.slice(6, 11))  // world

  // replace(찾는문자, 대체문자)
  console.log('07', str.replace('world', 'HEROPY')) // Hello HEROPY!
  console.log('08', str.replace('world!', '')) // Hello
}
{
  // match(정규식)
  const str = 'thesecon@gmail.com'
  console.log('09', str.match(/.+(?=@)/)) // ["thesecon", index: 0, input: "thesecon@gmail.com", groups: undefined]
  console.log('10', str.match(/.+(?=@)/)[0]) // thesecxon
}
{
  // trim() : 공백문자제거
  const str = '    Hello world    '
  console.log('11', str.trim().length) // Hello world / 11
}


// 숫자와 수학
{
  const pi = 3.14159265353979

  // toFixed(자리수)
  const str = pi.toFixed(2)
  console.log('12', str)  // 3.14
  console.log('13', typeof str) // string

  // parseInt(), parseFloat()
  const integer = parseInt(str)
  const float = parseFloat(str)
  console.log('14', integer, typeof integer)  // 3 number
  console.log('15', float, typeof float)      // 3.14 number
}
{
  Math.abs()  // 절대값
  console.log('abs\t', Math.abs(-12))
  console.log('min\t', Math.min(2, 4, 6, 1))
  console.log('max\t', Math.max(2, 4, 5, 3))
  console.log('ceil\t', Math.ceil(3.14))
  console.log('floor\t', Math.floor(3.14))  
  console.log('round\t', Math.round(3.14))  // 3
  console.log('round\t', Math.round(3.5))   // 4
  console.log('random\t', Math.random())
}


// 배열
{
  const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']
  console.log(numbers[0])
  console.log(fruits[fruits.length - 1])

  // .length
  console.log([].length)  // 0

  // .concat()
  console.log('16', numbers.concat(fruits)) // 원본 영향 없이 새로운 배열 반환
  console.log('17', numbers)
  console.log('18', fruits)

  // .forEach() // 반환되는 값 없다
  fruits.forEach(function (fruit, index, array) {
    console.log(`${index} :`, fruit, `:: ${array}`)
  })

  // .map() // 새로운 배열 만들어서 값 반환
  const a = fruits.map(function (fruit, index) {
    return fruit
  })
  console.log('19', a)  // ["Apple", "Banana", "Cherry"]

  const b = fruits.map(function (fruit, index) {  // 배열을 객체 데이터로 반환
    return {
      id: index,
      name: fruit
    }
  })
  console.log('20', b)  // [{id:1, name:Apple}, {id:2, name: Banana}, {id:3, name: Cherry}]

  // .filter()  
  const c = numbers.map( number => number < 3)
  console.log('21', c)  // [true, true, true, false]

  const d = numbers.filter(number => number < 3)
  console.log('22', d)  // [1, 2]

  // .find() .findIndex()
  const e = fruits.find(fruit => /^B/.test(fruit))  // 내용을 찾으면 바로 반환 
  console.log('23', e)  // Banana

  const f = fruits.findIndex(fruit => /^C/.test(fruit))
  console.log('24', f)  // 2

  // Array.prototype.find() : 첫 번째 요소의 값 반환 
  const found = numbers.find(number => number > 2)
  console.log('25.', found) // 3

  // .includes()
  const g = numbers.includes(3)
  console.log('26', g)  // true
  const h = fruits.includes('HEROPY')
  console.log('27', h)  // false

  // .push() .unshift() : 원본 수정됨 주의!
  const nums = [1, 2, 3, 4]
  nums.push(5)
  console.log('28', nums) // [1, 2, 3, 4, 5]
  nums.unshift(0) 
  console.log('29', nums) // [0, 1, 2, 3, 4, 5]

  // .reverse() : 원본 수정됨 주의!
  const nums1 = [1, 2, 3, 4]
  nums1.reverse()
  console.log('30', nums1)  // [4, 3, 2, 1]

  // .splice() : 원본 수정됨  :: 아이템 삭제 및 삽입 
  const nums2 = [1, 2, 3, 4]
  nums2.splice(2, 1)  // (index, 지울개수)
  console.log('31', nums2) // [1, 2, 4]

  nums2.splice(2, 0, 999) // (index, 0[지울개수], 추가할내용) :: 끼워넣기
  console.log('32', nums2) // [1, 2, 999, 4]

  nums2.splice(2, 1, 99)    // (index, 지울개수, 삽입할내용)
  console.log('33', nums2)  // [1, 2, 99, 4]
}


// 객체 : Object 매서드 :: 정적 매소드
{
  // Object.assign(target, source)  : target에 source 병합 후 target 반환 
  // 고유한 속성(중복시 덮어쓰기)
  const userAge = {
    name: 'Heropy',
    age: 85
  }
  const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
  }

  const target = Object.assign(userAge, userEmail)  
  console.log('34', target)
  console.log('35', userAge)
  console.log('36', target === userAge) // true
  
  const i = { k: 123}
  const j = { k: 123}
  console.log('37', i === j)  // false
}
{
  const userAge = {
    name: 'Heropy',
    age: 85
  }
  const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
  }

  const target = Object.assign({}, userAge, userEmail)  // (target, source, source)
  console.log('38', target) 
  console.log('39', userAge) 

  const target2 = Object.assign({}, userAge)  // 복사
  console.log('40', target2)
  console.log('41', userAge)
  console.log('42', userAge === target2) // false
}
{
  // Object.keys()
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
  }
  const keys = Object.keys(user)
  console.log('43', keys) // ['name', 'age', 'keys']

  console.log(user['email'])
  const values = keys.map(key => user[key])
  console.log('44', values)
}
{
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
  }
    const values = Object.keys(user).map(key => user[key])
    console.log('45', values) 
}


// Destructuring Assignment (구조 분해 할당)
{
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
  }
  const { name: userName, age, email, address = 'Korea' } = user

  console.log(`사용자의 이름은 ${userName}입니다.`)
  console.log(`${userName}의 나이는 ${age}입니다.`)
  console.log(`${userName}의 이메일 주소는 ${email}입니다.`)
  console.log(`address ${address}`) // undefiend => Korea

  const fruits = ['Apple', 'Banana', 'Cherry']
  const [a, b, c, d = 'melron'] = fruits
  console.log('46', a, b, c, d) 

  const [,bb,] = fruits
  console.log('47', bb) // Banana
}


// Spread (전개 연산자)
{
  const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
  console.log(fruits)
  console.log('48',...fruits) //  

  function toObject(a, b, ...c) { // rest parameter
    return {
      a: a,
      b: b,
      c: c
    }
  }
  console.log('49', toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: 'Cherry'}
  // toObject(fruits[0], fruits[1], fruits[2])

  const toObject2 = (a, b, ...c) => ({a, b, c})
  console.log('50', toObject2(...fruits))
}


// Data Immutability (데이터 불변성)
// 원시데이터: String, Number, Boolean, undefined, null :: 기본적으로 불변성을 가지고 있다.
// 참조형 데이터: Object, Array, Function :: 불변성이 없다.


// Shallow Copy(얕은 복사), Deep Copy(깊은 복사)
{
  const user = {
    name: 'Heoropy',
    age: 85,
    emails: ['thesecon@gmail.com']
  }
  const copyUser = user
  console.log('51', copyUser === user) // true

  user.age = 22
  console.log('user', user)
  console.log(`copyUsr`, copyUser)
}
{
  const user = {
    name: 'Heoropy',
    age: 85,
    emails: ['thesecon@gmail.com']
  }
  const copyUser = Object.assign({}, user)  // 복사  
  console.log('52', copyUser === user)  // false

  user.age = 22
  console.log('user', user)
  console.log('coypUser', copyUser)
}
{
  const user = {
    name: 'Heoropy',
    age: 85,
    emails: ['thesecon@gmail.com']  // 참조형 데이터(같은 메모리 주소 공유)
  }
  const copyUser = {...user}  // 전개연산자로 복사 (얕은 복사)
  console.log('53', copyUser === user) // false

  user.age = 22
  console.log('copyUser', copyUser) 
  console.log(`user`, user)

  user.emails.push('neo@zillinks.com')
  console.log('54', user.emails === copyUser.emails) // true (얕은복사)
  console.log(`user`, user)
  console.log(`copyUser`, copyUser)
}
{
  // 깊은 복사 구현 => lodash 사용
  const user = {
    name: 'Heoropy',
    age: 85,
    emails: ['thesecon@gmail.com']  // 참조형 데이터(같은 메모리 주소 공유)
  }
  const copyUser = _.cloneDeep(user)  // 깊은 복사
  console.log('55', copyUser === user) // false

  user.emails.push('neo@zillinks.com')
  console.log('56', user.emails === copyUser.emails)  // false (깊은복사)
  console.log(`user`, user)
  console.log(`copyUser`, copyUser)
}