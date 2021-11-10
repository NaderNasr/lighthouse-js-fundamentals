// const sayHello = function(name){
//   console.log('Hello, ' + name)
// }

// sayHello('Nader')

const returnSayHello = function sayHello (name) {
  return 'Hello,' + name
}

const greeting = returnSayHello('Nader')
console.log(greeting)