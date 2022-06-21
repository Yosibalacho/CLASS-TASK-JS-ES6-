//1,2//
// class Student {
//   constructor(name, classroom, identify) {
//     this.name = name;
//     this.classroom = classroom;
//     this.identify = identify;
//   }
// }
// const firstStudent = new Student("Yosi", 7, 321004);
// console.log(firstStudent);
// const secondStudent=new Student("Daniel",6,320098)
// console.log(secondStudent);
//3,4//
class User {
  constructor(firstName, LastName, Age, Email) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.Age = Age;
    this.Email = Email;
  }
}
// let firstUser = new User("Yosi", "Balacho", 25, "yosibala@gmail.com");
// let secondUser = new User("Daniel", "Gedamo", 26, "daniel2@gmail.com");
// let thirdUser = new User("Yoni", "Yizchak", 24, "yoni7@gmail.com");
// function printObjects(obj) {
//   for (key in obj) {
//     document.body.innerHTML += `<h3>${key}:${obj[key]} <h3> `;
//   }
// }
// printObjects(firstUser);
// printObjects(secondUser);
// printObjects(thirdUser);
//5//
let userInput = document.createElement("input");
document.body.append(userInput);
let userBtn = document.createElement("button");
document.body.append(userBtn);
userBtn.innerText = "SUBMIT";

