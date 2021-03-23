import getType from './getType';

// type
console.log(typeof "Hello")
console.log(typeof 1.234)
console.log('true : ', typeof true)               // boolean
console.log('undefined : ', typeof undefined)     // undefined
console.log('null : ', typeof null)               // object
console.log('{} : ', typeof {})                   // object
console.log('[] : ', typeof [])                   // object

getType("Hello")
getType(123.1)
getType(true)         // Boolean
getType(undefined)    // Undefined
getType(null)         // Null
getType({})           // Object
getType([])           // Array
