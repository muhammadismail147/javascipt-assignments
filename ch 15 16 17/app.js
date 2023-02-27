let courses = [];

let course1 = prompt("Enter first course name" , "computer");
let course2 = prompt("Enter second course name", "English");
let course3 = prompt("Enter third course name", "Urdu");
let course4 = prompt("Enter fourth course name", "Math");
let course5 = prompt("Enter fifth course name", "Chemistry");

courses.push(course1, course2, course3, course4, course5 );

alert(courses);

let course1Edit = prompt("Edit first course name", course1);
let course2Edit = prompt("Edit second course name", course2);
let course3Edit = prompt("Edit third course name", course3);
let course4Edit = prompt("Edit fourth course name", course4);
let course5Edit = prompt("Edit fifth course name", course5);

courses.splice(0, 1, course1Edit);
courses.splice(1, 1, course2Edit);
courses.splice(2, 1, course3Edit);
courses.splice(3, 1, course4Edit);
courses.splice(4, 1, course5Edit);
 
alert(courses);
