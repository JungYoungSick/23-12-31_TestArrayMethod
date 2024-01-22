// 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.

const fruit = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도"]

const deliciousFruit = fruit.map(fruit => "맛있는_" + fruit)

console.log(deliciousFruit)