//let returnParameter: string = ()
/*  arrow function with parameter with return  */
var add = function (a, b) {
    return a + b;
};
var getResult = function (username, points) {
    return username + " scored " + points + " points!";
};
console.log(add(1, 2));
console.log(getResult("Latha", 72));
/* arrow functions with parameter without return  */
var fullName = function (firstName) {
    var lastName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastName[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + lastName.join(", "));
};
fullName("Latha", "Pathuri");
fullName("Ravinder", "Reddy", "Pathuri");
/*  arrow functions without parameter with return  */
var WishMsg = function () {
    return "Hi.. Good Evening";
};
console.log(WishMsg());
/* arrow functions without parameter without return */
var Print = function () { return console.log("This is a arrow function without parameter and return"); };
Print();
/*  arrow functions in a class */
var Student = /** @class */ (function () {
    function Student(code, name) {
        var _this = this;
        this.showDetail = function () { return console.log("Student Code: " + _this.studCode + '\nStudent Name: ' + _this.studName); };
        this.studName = name;
        this.studCode = code;
    }
    return Student;
}());
var stud = new Student(101, "Latha");
stud.showDetail();
