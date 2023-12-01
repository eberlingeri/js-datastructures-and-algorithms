let instructor = {
  firstName: 'Kelly',
  isInstructor: true,
}

// console.log(Object.keys(instructor))
// console.log(instructor.hasOwnProperty('firstName'))

// Arrays
let names = ['Yoshi', 'Mario', 'Peash']

function characterCounter(str) {
  let isValidAlphanumeric = RegExp(/[a-z0-9]/)
  let result = {}

  for (let char of str) {
    char = char.toLowerCase()
    if (isValidAlphanumeric.test(char)) {
      result[char] = ++result[char] || 1 //refactor 2
      //result[char] > 0 ? result[char]++ : (result[char] = 1)//refactor 1
      // if (result[char] > 0) { //original
      //   result[char]++
      // } else {
      //   result[char] = 1
      // }
    }
  }
  // for (let i = 0; i < myString.length; i++) {
  //   let char = myString[i].toLowerCase()

  //   if (validChar.test(char)) {
  //     if (result[char] > 0) {
  //       result[char]++
  //     } else {
  //       result[char] = 1
  //     }
  //   }
  // }

  return result
}
let myString = 'Hello there 1 2 3 🤷!'
console.log(characterCounter(myString))
