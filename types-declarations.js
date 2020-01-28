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
var booleanDeclaration = true;
console.log(booleanDeclaration);
/*  number declaration  */
var numDeclaration = 101;
console.log(numDeclaration);
/*  string declaration  */
var stringDeclaration = "TypeScript";
console.log(stringDeclaration);
/*  array declaration  */
var numberArray1 = [1, 2, 3];
var numberArray2 = [100, 200, 300];
console.log(numberArray1);
console.log(numberArray2);
var stringArray1 = ["one", "two", "three"];
var stringArray2 = ["1", "2", "3"];
console.log(stringArray1);
console.log(stringArray2);
/*  tupleDeclaration declaration  */
var tupleDeclaration = ["Latha", 426];
console.log(tupleDeclaration);
/*  enum declaration  */
/*
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
/*  any declaration  */
var anyDeclaration1 = 4;
var anyDeclaration2 = "Latha";
var anyDeclaration3 = new Date();
console.log(anyDeclaration1);
console.log(anyDeclaration2);
console.log(anyDeclaration3);
/*  void declaration  */
function wishMsg() {
    console.log("Good Evening");
}
wishMsg();
/*  undefined declaration  */
var undefinedDeclaration = undefined;
console.log(undefinedDeclaration);
/*  null declaration  */
var nullDeclaration = null;
console.log(nullDeclaration);
/* never declaration  */ /*
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
var type1 = "This is a typeAssertion with 'angle-bracket'";
var typeAssertion1 = type1.length;
console.log(typeAssertion1);
var type2 = "This is a typeAssertion with 'as'";
var typeAssertion2 = type2.length;
console.log(typeAssertion2);
