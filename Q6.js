//명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.
const fruite = ["딸기", "바나나", "수박", "메론", "포도", "사과", "사과"]

const fruitename = '사과';

let myfruite = [];
for (let i = 0; i < fruite.length; i++) {
  if (fruite[i].split('') === fruitename) {
    myfruite.push(i);
  }
}

let lastApple;
if (myfruite.length > 0) {
  lastApple = myfruite[myfruite.length - 1];
} else {
  lastApple = -1;
}

if (lastApple >= 0) {
  console.log(`마지막 ${myfruite}사과의 위치: ${lastApple}`);
} else {
  console.log(`${myfruite}는 없습니다.`)
}