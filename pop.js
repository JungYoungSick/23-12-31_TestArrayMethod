let myArray = [1, 2, 3, 4, 5];

let removedElement = myArray.pop();

console.log('제거된 요소 : ', removedElement)
// 제거된 요소 :  5

// 제거된 마지막 요소를 알려준다.
console.log('수정된 배열 : ', myArray)
//수정된 배열 :  [ 1, 2, 3, 4 ]

// 마지막 요소를 제거한 나머지 전체 배열의 값들을 불러온다.


let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

// stack 배열에 1,2,3 값을 push로 추가.
let poppedValue = stack.pop();
// poppedValue변수에 stack 추가 된 값을 pop으로 제거.

console.log('제거된 요소 : ', poppedValue) // 제거된 요소 : 3

console.log('수정된 스텍 : ', stack) // 수정된 스텍 :  [ 1, 2 ]

//* Q1
let originalArray = [15, 25, 35, 45, 55];

// 최근에 추가된 요소를 제거하고, 제거된 요소를 출력하는 함수 작성
function removeLastElement(arr) {
  arr.pop();
}

removeLastElement(originalArray);

console.log('수정된 배열 : ', originalArray)

let numbers = [10, 20, 30, 40, 20, 50, 20];
// 특정한 값을 찾아 제거하는 함수 작성
function removeValueFromArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr[i] = 20;
      arr.pop();
      return arr;
    }
  }
}
let modifiedArray = removeValueFromArray(numbers, 20);

console.log('수정된 배열 : ', modifiedArray);

let myArray1 = [1, 2, 3, 4, 5];

function removeLastElement(arr) {
  arr.pop();
}

removeLastElement(myArray1);
console.log(myArray1);