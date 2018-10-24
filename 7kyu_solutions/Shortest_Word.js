// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  s = s.split(" ")
  let letters = s[0].length;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i].length < letters) {
      letters = s[i].length
    }
  }
  return letters
}