function courses(courses) {
    courses.forEach(function (val) {
        console.log(val);
    });
}
var stringList = ["Java", "HTML", "Angular"];
var callCourses = courses(stringList);
var students = function (studentsList) {
    studentsList.forEach(function (val) {
        console.log(val);
    });
};
var studentsArray = ["Latha", "Rama", "Bhargavi"];
students(studentsArray);
var division = function (div, a) {
    if (a) {
        console.log(div / a);
    }
    else {
        console.log(div);
    }
};
division(123, 12);
division(21);
var restParameter = function (a) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(a + " " + names.join(", "));
};
restParameter(11, "Shirisha", "srivani");
restParameter(120, "Lasya", "Meghana", "LoukhyaSri");
