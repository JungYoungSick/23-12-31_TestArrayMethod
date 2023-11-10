// 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.
const fruite = ["딸기", "바나나", "수박", "메론", "포도"]
const three = fruite.splice(2, 1, "new");
console.log(fruite)