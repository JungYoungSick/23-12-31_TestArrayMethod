const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const isEven = myArray.some(function (element) {
  return element % 2 === 0;
})

if (isEven) {
  console.log("배열에 짝수가 포함되어 있습니다.")
} else {
  console.log("배열에 짝수가 포함되어 있지 않습니다.")
}