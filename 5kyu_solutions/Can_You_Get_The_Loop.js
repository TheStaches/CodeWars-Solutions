// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.

function loop_size(node){
  let first = node;
  let second = node.next
  let count = 1;
  
  
  while (first != second) {
    first = first.next;
    second = second.next.next;
  }
  second = first.next;
  while (first != second) {
    second = second.next
    count += 1;
  }
  
  return count;
}