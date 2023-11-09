const myArray = [10, 20, 30, 40, 50]

const filterArray = myArray.filter(function (element) {
  return element > 20;
})
console.log(filterArray);