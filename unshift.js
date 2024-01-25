//명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.
const fruite = ["딸기", "바나나", "수박", "메론", "포도"]
const reverseFruite = fruite.reverse();
console.log(reverseFruite)

let myArray = [2, 3, 4];
myArray.unshift(1);
console.log(myArray); //결과 : [1, 2, 3, 4]

let length = myArray.unshift(0);
console.log(length); //결과 : 5
console.log(myArray); //결과 : [0, 1, 2, 3, 4]

myArray.unshift(-2, -1);
console.log(myArray); //결과 : [-2, -1, 0, 1, 2, 3, 4]

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
]

function addNewUser(usersArray, newUser, maxLength) {
  usersArray.unshift(newUser);

  if (usersArray.length > maxLength) {
    usersArray.pop();
  }
}

addNewUser(users, { id: 4, name: "Dave" }, 3);
console.log(users);

// 문자열을 담은 배열
let messages = ["Hello", "World", "JavaScript"];

// 조건을 충족하는 문자열만 배열에 추가하는 함수
function addMessageIfLongEnough(messagesArray, newMessage, minLength) {
  if (newMessage.length >= minLength) {
    messagesArray.unshift(newMessage);
  }
}

addMessageIfLongEnough(messages, "Hi", 3); //! "Hi"는 길이 조건을 만족하지 않음
console.log(messages); // 결과: ["Hello", "World", "JavaScript"]

addMessageIfLongEnough(messages, "Wellcome", 3); //? "Wellcome"은 길이 조건을 만족
console.log(messages); // 결과: ["Welcome", "Hello", "World", "JavaScript"]

// 고객 문의사항을 담은 배열
let inquiries = [
  { id: 1, question: "Payment method?" },
  { id: 2, question: "Delivery time?" },
  { id: 3, question: "Return policy?" },
  { id: 4, question: "Warranty terms?" },
  { id: 5, question: "Discount offers?" },
];

// 새 문의사항을 배열의 시작에 추가하는 함수
function addInquiry(inquiresArray, newInquiry) {
  inquiresArray.unshift(newInquiry);
  if (inquiresArray.length > 5) {
    inquiresArray.pop();
  }
}

//새 문의사항 추가
addInquiry(inquiries, {
  id: 6,
  question: "How to track my order?",
});
console.log(inquiries);
/**결과 :
 * [
  { id: 6, question: 'How to track my order?' },
  { id: 1, question: 'Payment method?' },
  { id: 2, question: 'Delivery time?' },
  { id: 3, question: 'Return policy?' },
  { id: 4, question: 'Warranty terms?' }
] */