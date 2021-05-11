//destructuring array
const array = ['a', 'b', 'c', 'e', 'f']
const [x, y, ...others] = array //hace referencia a los indices
console.log(x)
console.log(y)
console.log(others)


//destructuring
function sumnMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, mult, div = 'no div found'] = sumnMultiply(2, 5)
console.log(sum, mult, div)

///poner valores por defecto en objetos en destructuring

const personOne = {
  name: 'Kyle',
  age: 24,
  address: {
    city: 'somewhere',
    state: 'one of them'
  }
}

const { year: yearOfBirth = '2022' } = personOne
console.log(yearOfBirth)

let test = { name: 'andres' }
test = { ...personOne, ...test }
console.log(test)
const personTwo = {
  name: 'Sally',
  age: 32,
  address: {
    city: 'Bogota',
    state: 'Colombia'
  },
  favoriteFood: 'watermelon'
}

//union de objetos
const { name, age, address } = personTwo
const personThree = { ...personOne, ...personTwo }
console.log(personThree)

//rest operator
function sumar(a, b, ...c) {
  let result = a + b
  c.forEach(item => result += item)
  return result
}

console.log(sumar(1, 2, 3, 4, 5))

sumRest = (...c) => {
  let result = 0
  c.forEach(item => result += item)
  return result
}

console.log(sumRest(1, 2, 3))


// const arrayToObject = (array) =>
//   array.reduce((people, person) => {
//     people[Object.keys(person)[0]] = Object.values(person)[0]
//     return people
//   }, {})

// console.log(arrayToObject(names))
//   const obj = { 'BCD': { name: 'Marie', age: 24 } }
//   console.log(Object.keys(obj))
//   console.log(Object.values(obj))

// const reducer = (accumulate, item) =>

// const names = [
//   { name: 'Marie', age: 24 },
//   { name: 'Julia', age: 21 },
//   { name: 'Marcy', age: 32 },
// ]

// const [BCD, CDE, ABC] = names
// console.log(BCD)
//const numbers = [1,2, 3]

//reducer examples

const array = [1, 2, 3, 4]

const reducer = (accumulator, item) => accumulator += item
console.log(array.reduce(reducer, 5))

// const names = [
//   { 'BCD': { name: 'Marie', age: 24 } },
//   { 'CDE': { name: 'Julia', age: 21 } },
//   { 'ABC': { name: 'Marcy', age: 32 } },
// ]


/// array methods -> .map forEach .filter includes

const numbersArray = [1, 2, 3, 4, 5]

console.log(numbersArray.map(element => element * 2))

console.log(numbersArray.forEach(element => element * 2))
console.log(numbersArray.filter(element => element === 2))
console.log(numbersArray.includes(4))
console.log(numbersArray.reduce((sum, current) => sum += current, 0))



const array1 = [1, 2, 3]
const array2 = [2, 3, 4]

//find intersection between two arrays

//.map creates a new array populated with the results of calling a provided function on every element in the calling array
// it returns an array with three positions always
//not possible to use .map
intersection = (array1, array2) => array1.map(item => (array2.includes(item) && item))

//intersection foreach
intersectionForEach = (array1, array2) => {
  let arrayResult = []
  array1.forEach(element => array2.includes(element) && arrayResult.push(element))
  return arrayResult
}

//intersection with filter
intersectionTwo = (array1, array2) => array1.filter(item => array2.includes(item))

//console.log(intersection(array1, array2))
console.log(intersectionForEach(array1, array2))


///foreach instead reducer

const names = [
  { 'BCD': { name: 'Marie', age: 24 } },
  {
    'CDE': { name: 'Julia', age: 21 },
    'XYZ': { name: 'Andres', age: 25 }
  },
  { 'ABC': { name: 'Marcy', age: 32 } },
]

const arrayToObject = (array) => {
  let objectResult = {}
  array.forEach(element => {
    keys = Object.keys(element)
    values = Object.values(element)
    for (let i = 0; i < keys.length; i++) {
      objectResult[keys[i]] = values[i]
    }
  });
  return objectResult
}

console.log(arrayToObject(names))
