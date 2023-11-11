const myArray = [1, 2, 3, 4, 5, 6];
const index = myArray.findIndex(function (element) {
  return element > 1.5;
})

console.log(index);