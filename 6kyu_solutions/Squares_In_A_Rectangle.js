// A rectangle can be split up into a grid of 1x1 squares, the amount of which being equal to the product of the two dimensions of the rectangle. 
// Depending on the size of the rectangle, that grid of 1x1 squares can also be split up into larger squares, for example a 3x2 rectangle has a total of 8 squares, 
// as there are 6 distinct 1x1 squares, and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

// Your task is to write a function findSquares that returns the total number of squares for any given rectangle, 
// the dimensions of which being given as two integers with the first always being equal to or greater than the second.

function findSquares(x,y){
  let dec = (x + y) - 1
  let shortSide = x < y ? x : y 
  let total = 0;
  let add = x * y;

  while (shortSide > 0) {  
    total += add
    add -= dec
    dec -= 2;
    shortSide -= 1
  }
  return total
}