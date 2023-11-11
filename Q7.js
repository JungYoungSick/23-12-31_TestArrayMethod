// 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드를 작성하세요.
const fruite = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도"]

const fruiteAnd = fruite.filter(fruit => fruit.includes('청'));
console.log(fruiteAnd)
