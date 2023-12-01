// Frequency Counter Pattern: Compare 2 arrays
/*
- Write a function called `same` which accepts 2 arrays. 
- The function should return true if every value in the array has it's 
corresponding value squared in the second array. 
- The frequency of values must be the same.
*/
function same(arr1, arr2) {
  const numberFrequency = {}
  const squaredNumberFrequency = {}

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let key in arr1) {
    numberFrequency[arr1[key]] = ++numberFrequency[arr1[key]] || 1
  }

  for (let key in arr2) {
    squaredNumberFrequency[arr2[key]] = ++squaredNumberFrequency[arr2[key]] || 1
  }

  for (let value in numberFrequency) {
    if (!squaredNumberFrequency.hasOwnProperty(value ** 2)) {
      return false
    }
    if (squaredNumberFrequency[value ** 2] !== numberFrequency[value]) {
      return false
    }
  }

  return true
}

// console.log(same([5, 1, 2, 3, 3, 3], [9, 4, 9, 25, 1, 9])) // true
// console.log(same([1, 2, 3], [1, 9])) // false
// console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)

// Frequency Counter Pattern: Anagram
// What is an Anagram?
// A word or phrase made by reordering the letters of another word or phrase
function validAnagram(stringOne, stringTwo) {
  const sourceString = {}
  const anagramString = {}

  stringOne = stringOne.toLowerCase()
  stringTwo = stringTwo.toLowerCase()

  if (stringOne.length !== stringTwo.length) {
    return false
  }

  for (let char in stringOne) {
    sourceString[stringOne[char]] = ++sourceString[stringOne[char]] || 1
  }

  for (let char in stringTwo) {
    anagramString[stringTwo[char]] = ++anagramString[stringTwo[char]] || 1
  }

  for (let key in sourceString) {
    if (!anagramString.hasOwnProperty(key)) {
      return false
    }
    if (anagramString[key] !== sourceString[key]) {
      return false
    }
  }

  return true
}

console.log('Result: ', validAnagram('Querty', 'ertuyq'))
