//let returnParameter: string = ()

/*  arrow function with parameter with return  */
let add = (a: number, b:number): number => {
  return a + b;
}

let getResult = (username: string, points: number): string => {
  return `${ username } scored ${ points } points!`;
}

console.log(add(1, 2));
console.log(getResult("Latha", 72));

/* arrow functions with parameter without return  */
let fullName = (firstName: string, ...lastName: string[]) => {
  console.log(`${firstName} ${lastName.join(", ")}`);
}

fullName("Latha", "Pathuri");
fullName("Ravinder", "Reddy", "Pathuri");

/*  arrow functions without parameter with return  */
let WishMsg = (): string => {
  return "Hi.. Good Evening";
}
console.log( WishMsg() );

/* arrow functions without parameter without return */
let Print = () => console.log("This is a arrow function without parameter and return");
Print();


/*  arrow functions in a class */

class Student {
    studCode: number;
    studName: string;
    constructor(code: number, name: string) {
            this.studName = name;
            this.studCode = code;
    }
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)
}
let stud = new Student(101, "Latha");
stud.showDetail();
