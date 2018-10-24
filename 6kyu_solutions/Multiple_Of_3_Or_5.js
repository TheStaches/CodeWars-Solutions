// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
function solution(number){
  let numbersArr= [];
  
  if (number > 3) {
    for (let i = 3; i < number; i += 3) {
      numbersArr.push(i);
    }
    for (let i = 5; i < number; i += 5) {
      numbersArr.push(i);
    }
  } else {
    return 0;
  }
  
  return numbersArr.filter((number, index, arr) => {
    return arr.indexOf(number) == index;
  }).reduce((total, number) => {
    return total += number;
  })
}