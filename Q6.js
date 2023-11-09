const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

myArray.splice(3, 5);
console.log(myArray);

myArray.splice(2, 3, 'A', 'B');
console.log(myArray);

myArray.splice(2, 1, 'C');
console.log(myArray)