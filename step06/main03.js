import _ from 'lodash'
import getType from './getType'
import getRandom from './getRandom'
import myData from './myData'

console.log('01', _.camelCase('the hello world'))
console.log('02', getType([1,2,3]))
console.log('03', getRandom(), getRandom())

// lodash
{
  const usersA = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' }
  ]
  const usersB = [
    { userId: '1', name: 'HEROPY' },
    { userId: '3', name: 'Amy' }
  ]

  const usersC = usersA.concat(usersB)
  console.log('concat', usersC)  // 4 (1 2 1 3) : 중복 데이터 발생
  console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 3 (1 2 3)  : 하나의 배열에서 중복 제거 

  const usersD = _.unionBy(usersA, usersB, 'userId') // 중복 제거 후 새로운 배열 생성 
  console.log('unionBy', usersD)  // 3 (1 2 3)
}
{
  const users = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' },
  ]

  const foundUser = _.find(users, { name: 'Amy' })
  const foundUserIndex = _.findIndex(users, { name: 'Amy' })
  console.log(`foundUser`, foundUser)
  console.log(`foundUserIndex`, foundUserIndex)

  _.remove(users, { name: 'HEROPY' })
  console.log(`users`, users)
}


// JSON (JavaScrip Object Notation)
// 자바스크립트 객체 표기법
{
  const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
      'thesecon@gmail.com',
      'neo@zillinks.com'
    ]
  }
  console.log('user', user)

  const str = JSON.stringify(user)
  console.log(`str`, str)
  console.log(typeof str) // string

  const obj = JSON.parse(str)
  console.log(`obj`, obj) 
  console.log(typeof obj) // object

  console.log(`myData`, myData)
  const a = JSON.stringify(myData)
  console.log('a', a)
  const b = JSON.parse(a)
  console.log(`b`, b)
}


// Storage
{
  // localStorage & sessionStorage
  // Window.localStorage.setItem('key', 'value')
  // Window.localStorage.getItem('key')
  const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
      'thesecon@gmail.com',
      'neo@zillinks.com'
    ]
  }

  localStorage.setItem('user', JSON.stringify(user))  // 문자 데이터로 변환해서 저장해야!
  const str = localStorage.getItem('user')
  const obj = JSON.parse(str)
  console.log('01', obj)
  obj.age = 22
  console.log('02', obj)
  localStorage.setItem('user', JSON.stringify(obj))
  localStorage.removeItem('user')
}
