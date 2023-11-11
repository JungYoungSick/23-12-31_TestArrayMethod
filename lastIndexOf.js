const myArray = [10, 20, 30, 40, 50];

const lastIndex = myArray.lastIndexOf(40);

if (lastIndex !== -1) {
  console.log(`뒤에서부터 인덱스 ${lastIndex}에서 요소를 찾았습니다`)
} else {
  console.log("요소를 찾을 수 없습니다.")
}