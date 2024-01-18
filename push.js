let fruite = ['사과', '바나나', '수박', '포도']
console.log('기존배열', fruite)

fruite.push('오렌지')
console.log('새로운 배열', fruite)

fruite.push('당근', '오이');
console.log('추가된 배열', fruite)

fruite.push(1, 2, 3, 4, 5)
console.log('추가된 숫자', fruite)


// Q1 = 색상추가
let color = ['초록', '주황'];
color.push('빨강', '핑크', '보라')

console.log('추가색상', color)
//! 색상은 추가한 순서대로 등록된다.
