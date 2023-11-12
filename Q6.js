//명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.
const fruit = ["딸기", "바나나", "수박", "메론", "포도", "청사과", "청포도"]

const fruitAnd = fruit.includes("포도");

console.log(fruitAnd)



// const students = ["홍길동", "김철수", "이영희", "박승준", "이영희", "정민우"];

// const targetName = "이영희";

// const lastIndex = students.lastIndexOf(targetName);

// if (lastIndex !== -1 && students.includes(targetName)) {
//   console.log(`마지막 ${targetName} 학생의 위치: ${lastIndex}`);
// } else {
//   console.log(`${targetName}을 가진 학생이 명단에 없습니다.`);
// }