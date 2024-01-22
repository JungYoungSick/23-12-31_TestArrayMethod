// 모든 학생들의 이름이 세 글자인지 확인하는 코드를 작성하세요

const fruit = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도"]

const threeName = fruit.every(fruits => fruits.length === 3)

console.log(threeName)

if (threeName === true) {
  console.log("모든 이름이 세글자입니다.")
} else {
  console.log("모든 이름이 세글자가 아닙니다.")
}