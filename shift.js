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
/**
 * 손님 홍길동님, 주문을 받으세요
손님 김철수님, 주문을 받으세요
손님 이영희님, 주문을 받으세요
손님 박영수님, 주문을 받으세요
대기열이 비었습니다.
*/

function findMax(arr) {
  if (arr.length === 0) {
    // 빈 배열인 경우 최댓값이 없으므로 undefined 반환
    return undefined;
  }

  let max = arr[0];  // 배열의 첫 번째 요소를 초기 최댓값으로 설정

  while (arr.length > 0) {
    const currentElement = arr.shift();
    if (currentElement > max) {
      // 현재 요소가 현재까지의 최댓값보다 크면 갱신
      max = currentElement;
    }
  }

  return max;
}

// 사용 예제
const numbers = [12, 5, 23, 8, 16];
const maxNumber = findMax(numbers);

console.log("최댓값:", maxNumber);

