const myArray = [1, 2, 3, 4];
const firstAraay = myArray.shift();

console.log(myArray);
console.log(firstAraay);

const fruites = ["사과", '바나나', "딸기"]
const removedElement = fruites.shift();

console.log("제거된 요소 : ", removedElement);
console.log("변경된 배열 : ", fruites);

const breackfastMenu = ["계란", "토스트", "우유", "오렌지 주스"];

while (breackfastMenu.length > 0) {
  const food = breackfastMenu.shift();
  console.log(`아침에 먹을 음식 : ${food}`);
}

console.log("아침식사가 끝났습니다!");
/**제거된 요소 :  사과
변경된 배열 :  [ '바나나', '딸기' ]
아침에 먹을 음식 : 계란
아침에 먹을 음식 : 토스트
아침에 먹을 음식 : 우유
아침에 먹을 음식 : 오렌지 주스
아침식사가 끝났습니다! */

const waitingQueue = ["홍길동", "김철수", "이영희", "박영수"];

while (waitingQueue.length > 0) {
  const currentCustomer = waitingQueue.shift();
  console.log(`손님 ${currentCustomer}님, 주문을 받으세요`);
}

console.log("대기열이 비었습니다.");
