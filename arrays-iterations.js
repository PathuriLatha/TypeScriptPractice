var numbers = [100, 200, 300, 400, 500];
/*         Iterating using 'forEach'        */
console.log("Iterating with forEach");
numbers.forEach(function (value) {
    console.log(value);
});
/*         Iterating using 'for loop'      */
console.log("Iterating with for loop");
for (var i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}
/*         Iterating using 'forIN'        */
console.log("Iterating with forIN");
for (var j in numbers) {
    console.log(j);
}
/*         Iterating using 'forOF'        */
console.log("Iterating with forOF");
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var k = numbers_1[_i];
    console.log(k);
}
var list = ["Java", "Angular", "Oracle"];
/* Iterating using forEach */
console.log("Using forEach");
list.forEach(function (data) {
    console.log(data);
});
/* Iterating using for loop */
console.log("using for loop");
for (var x = 0; x <= list.length - 1; x++) {
    console.log(list[x]);
}
/* Iterating using forOf */
console.log("using forOf");
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var courses = list_1[_a];
    console.log(courses);
}
