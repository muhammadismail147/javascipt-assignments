alert("Enter your marks for 5 subjects out of 100")

let sub1 = prompt("Enter your English marks")
let sub2 = prompt("Enter your Urdu marks")
let sub3 = prompt("Enter your Islamiat marks")
let sub4 = prompt("Enter your Chemistry marks")
let sub5 = prompt("Enter your Physics marks")

let subject1 = parseInt(sub1);
let subject2 = parseInt(sub2);
let subject3 = parseInt(sub3);
let subject4 = parseInt(sub4);
let subject5 = parseInt(sub5);

let obtainedmarks = subject1 + subject2 + subject3 + subject4 + subject5

let totalmarks = 500

let result = "Your percentage is " + (obtainedmarks * 100 ) / totalmarks + "%"

alert(result)