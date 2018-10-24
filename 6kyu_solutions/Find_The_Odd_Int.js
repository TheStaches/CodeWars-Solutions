// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let sorted = A.sort((a, b) => {return a-b})
  
  for (let i = 0; i < sorted.length; i += 2) {
    if (sorted[i] != sorted[i+1]) {
      return sorted[i]
    } 
  }
}