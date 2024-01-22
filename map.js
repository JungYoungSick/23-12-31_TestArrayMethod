const myArray = [1, 2, 3, 4, 5, 6, 6, 7, 8];

const squaredArray = myArray.map(function (element) {
  return element * element;
})
console.log(squaredArray);