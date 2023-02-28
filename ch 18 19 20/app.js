let courses = [];

let course1 = prompt("Enter first course name ?");
let course2 = prompt("Enter second course name ?");
let course3 = prompt("Enter third course name ?");
let course4 = prompt("Enter forth course name ?");
let course5 = prompt("Enter fifth course name ?");

courses.push(course1, course2, course3, course4, course5);
alert(courses);
let course_1 = prompt("course1", course1);
let course_2 = prompt("course2", course2);
let course_3 = prompt("course3", course3);
let course_4 = prompt("course4", course4);
let course_5 = prompt("course5", course5);

let newcourses = [];
newcourses.push(course_1, course_2, course_3, course_4, course_5);
for (var i = 0; i < courses.length; i++) {
    if (courses[i] != newcourses[i]) {
        courses.splice(i, 1, newcourses[i])
    }
}
alert(courses)