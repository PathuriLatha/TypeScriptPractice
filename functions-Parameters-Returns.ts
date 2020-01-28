/* function add(a: number, b: number): number{
   *//* let sum: number;
  sum = a + b;
  return sum; *//*
  return a + b;
} */

/*  Creating function with optional parameter and returns a 'number' value    */
function add(a: number, b: number, c?: number): number{
  if(c){
    return a + b + c;
  }
  else{
    return a+b;
  }
}

/* function fullName(firstName: string, lastName?: string): string{
   *//* let fName: string = firstName +" "+ lastName;
  return fName; *//*
  return firstName +" "+lastName;
} */

/*  Creating function with optional parameter and returns a 'string' value    */
function fullName(firstName: string, lastName?: string): string{
  if(lastName){
    return firstName +" "+lastName;
  }
  else{
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
function subjects(sub1: string, sub2: string, ...subjects: string[]): string{
  return sub1 +" "+ sub2 +" "+ subjects.join(", ");
}

let myFunction: any = function(parameter: any): any{
  return parameter +" type is "+ typeof parameter;
}

let add1 = add(12, 13);
let add2 = add(12, -13);
let add3 = add(100, -12, 10);

let fullName1 = fullName("Latha", "Pathuri");
let fullName2 = fullName("Bhargavi", "Jillela");
let fullName3 = fullName("Lasya");

let subjects1 = subjects("Telugu", "Hindi", "English");
let subjects2 = subjects("Maths", "Science", "History", "Geography");
let subjects3 = subjects("Maths", "Physics", "Chemistry", "Biology", "Social");

console.log(add1);
console.log(add2);
console.log(add3);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

console.log(subjects1);
console.log(subjects2);
console.log(subjects3);

console.log( myFunction("TypeScript") );
console.log( myFunction(2020) );
console.log( myFunction( new Date() ) );
console.log( myFunction(true) );


