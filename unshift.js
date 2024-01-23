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