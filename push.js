let fruite = ['사과', '바나나', '수박', '포도']
console.log('기존배열', fruite)

fruite.push('오렌지')
console.log('새로운 배열', fruite)

fruite.push('당근', '오이');
console.log('추가된 배열', fruite)

fruite.push(1, 2, 3, 4, 5)
console.log('추가된 숫자', fruite)


//* Q1 = 색상추가
let color = ['초록', '주황'];
color.push('빨강', '핑크', '보라')

console.log('추가색상', color)
//! 색상은 추가한 순서대로 등록된다.

//* Q2 = 숫자 배열에 짝수 추가
let evenNumbers = [1, 3, 5, 7];

evenNumbers.push(2, 4, 6, 8);
console.log('결과', evenNumbers)

//* 심화과정
//* 예제 1: 다양한 데이터 유형 추가
// push 메서드는 배열에 다양한 데이터 유형을 추가할 수 있습니다. 예를 들어, 문자열, 숫자, 객체, 배열 등을 함께 추가할 수 있습니다.
let mixedArray = [1, '안녕', { key: 'value' }];
console.log('기존배열', mixedArray)
// 기존배열 [ 1, '안녕', { key: 'value' } ]

mixedArray.push(['배열', '추가']);
console.log('새로운 배열', mixedArray)
// 새로운 배열 [ 1, '안녕', { key: 'value' }, [ '배열', '추가' ] ]

//* 예제 2: 배열 길이 반환
// push 메서드는 배열에 추가된 요소의 새로운 길이를 반환합니다. 이를 이용하여 새로운 요소를 추가한 후의 배열 길이를 확인할 수 있습니다.
let myArray = ['사과', '바나나',
  '딸기']
console.log('기존 배열', myArray)

let newLength = myArray.push('키위');
console.log('새로운 배열', newLength)
//? push를 사용했음에도 길이의 숫자가 나오는 이유는 무엇일까?
//! push를 두번 호출하게 되면 첫번쨰는 배열의 값을 주고, 두번째 호출 시에는 길이를 반환한다.
//! push에서 값만을 추가 하고 싶다면 첫번째 선언해준 변수를 그대로 불러오면 된다.

//Q3 = 학생 성적 관리
let grades = [78, 89, 92];

grades.push('학생A', 95);// 학생A 95점 추가
grades.push('학생B', 85);// 학생B 85점 추가
grades.push('학생C', 90);// 학생C 90점 추가

// 배열의 내용 출력
console.log('배열 내용', grades);
// 배열 내용 [
//   78, 89,
//   92, '학생A',
//   95, '학생B',
//   85, '학생C',
//   90
// ]

// 배열의 길이 출력
console.log('배열 길이', grades.length); // 배열 길이 9

//* 문제: 배열조작
let numbers = [10, 20, 30];

numbers.push(40);// number의 맨끝에 40을 추가해주세요.
numbers.push(50);// number의 맨끝에 50을 추가해주세요.
numbers.push(60);// number의 맨끝에 60을 추가해주세요.

console.log(numbers); //[ 10, 20, 30, 40, 50, 60 ]