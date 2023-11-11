// 명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.

const fruit = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도", "키위"]
const nameList = fruit.filter(name => name.includes('메'))
console.log(nameList)