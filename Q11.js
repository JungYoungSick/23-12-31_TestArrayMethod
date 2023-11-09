const myArray = [10, 20, 30, 40, 50];

const index = myArray.indexOf(30);

if (index !== -1) {
  console.log(`답 중에 ${index}를 찾았다`)
} else {
  console.log("답없음.")
}