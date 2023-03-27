/*
Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
*/


// Solution

function removeEveryOther(arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
    newArr.push(arr[]i);
  }
  return newArr;
}

// or

function removeEveryOther(arr) {
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}