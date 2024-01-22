// 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.

const fruit = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도", "키위"]

const start = fruit.some(name => name.startsWith("청"))

if (start) {
  console.log("청으로 시작하는 과일이 있습니다.")
} else {
  console.log("청으로 시작하는 과일이 없습니다..")
}