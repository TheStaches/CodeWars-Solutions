// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
  return str.split('').reverse().join('').match(/[A-Za-z]+/g).join('')
}