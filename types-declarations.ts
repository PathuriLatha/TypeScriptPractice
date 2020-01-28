/*
  Boolean
  Number
  String
  Array
  Tuple
  Enum
  Any
  Void
  Null and Undefined
  Never
  Object
  Type assertions
*/
/*  boolean declaration  */
let booleanDeclaration: boolean = true;
console.log(booleanDeclaration);

/*  number declaration  */
let numDeclaration: number = 101;
console.log(numDeclaration);

/*  string declaration  */
let stringDeclaration: string = "TypeScript";
console.log(stringDeclaration);

/*  array declaration  */
let numberArray1: number[] = [1, 2, 3];
let numberArray2: Array<number> = [100, 200, 300];
console.log(numberArray1);
console.log(numberArray2);

let stringArray1: string[] = ["one", "two", "three"];
let stringArray2: Array<string> = ["1", "2", "3"];
console.log(stringArray1);
console.log(stringArray2);

/*  tupleDeclaration declaration  */
let tupleDeclaration: [string, number] = ["Latha", 426];
console.log(tupleDeclaration);

/*  enum declaration  */
/*
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
 */
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);

/*  any declaration  */
let anyDeclaration1: any = 4;
let anyDeclaration2: any = "Latha";
let anyDeclaration3: any = new Date();
console.log(anyDeclaration1);
console.log(anyDeclaration2);
console.log(anyDeclaration3);

/*  void declaration  */
function wishMsg(): void {
    console.log("Good Evening");
}
wishMsg();

/*  undefined declaration  */
let undefinedDeclaration: undefined = undefined;
console.log(undefinedDeclaration);

/*  null declaration  */
let nullDeclaration: null = null;
console.log(nullDeclaration);

/* never declaration  *//*
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop(): never {
 while (true) {

 }
} */

/* type assertions declaration */
let type1: any = "This is a typeAssertion with 'angle-bracket'";
let typeAssertion1: number = (<string>type1).length;
console.log(typeAssertion1);

let type2: any = "This is a typeAssertion with 'as'"
let typeAssertion2: number = (type2 as string).length;
console.log(typeAssertion2);

