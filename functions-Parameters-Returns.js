/* function add(a: number, b: number): number{
   */ /* let sum: number;
sum = a + b;
return sum; */ /*
return a + b;
} */
/*  Creating function with optional parameter and returns a 'number' value    */
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
/* function fullName(firstName: string, lastName?: string): string{
   */ /* let fName: string = firstName +" "+ lastName;
return fName; */ /*
return firstName +" "+lastName;
} */
/*  Creating function with optional parameter and returns a 'string' value    */
function fullName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
/* function subjects(sub1: string, sub2?: string, ...subjects: string[]): string{
  if(sub2){
    return sub1 +" "+ sub2 +" "+ subjects.join(" ");
  }
  else{
    return sub1 +" "+ subjects.join(", ");
  }
} */
/*  Creating function with Rest parameters and returns a string value    */
function subjects(sub1, sub2) {
    var subjects = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        subjects[_i - 2] = arguments[_i];
    }
    return sub1 + " " + sub2 + " " + subjects.join(", ");
}
var myFunction = function (parameter) {
    return parameter + " type is " + typeof parameter;
};
var add1 = add(12, 13);
var add2 = add(12, -13);
var add3 = add(100, -12, 10);
var fullName1 = fullName("Latha", "Pathuri");
var fullName2 = fullName("Bhargavi", "Jillela");
var fullName3 = fullName("Lasya");
var subjects1 = subjects("Telugu", "Hindi", "English");
var subjects2 = subjects("Maths", "Science", "History", "Geography");
var subjects3 = subjects("Maths", "Physics", "Chemistry", "Biology", "Social");
console.log(add1);
console.log(add2);
console.log(add3);
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(subjects1);
console.log(subjects2);
console.log(subjects3);
console.log(myFunction("TypeScript"));
console.log(myFunction(2020));
console.log(myFunction(new Date()));
console.log(myFunction(true));
