/* array inbuilt methods  */
/*  Defining empty string array  */
var stringArray = [];
/*  length method  */
console.log("before adding size of the array is :: " + stringArray.length);
/* push method for adding*/
stringArray.push("HTML");
stringArray.push("CSS");
stringArray.push("JavaScript");
stringArray.push("JQuery");
stringArray.push("Bootstrap");
stringArray.push("TypeScript");
stringArray.push("Angular");
stringArray.push("Spring");
stringArray.push("Hibernate");
console.log("after adding size of the array is :: " + stringArray.length);
/*  pop method  for removing last index element*/
var removingElement = stringArray.pop(); //it's removing last index of the element
console.log("Removing value :: " + removingElement);
console.log("after removing size of the array is :: " + stringArray.length);
var removingElement1 = stringArray.pop();
console.log("Removing value :: " + removingElement);
console.log("after removing size of the array is :: " + stringArray.length);
/*  splice with two parameters  removing specify index element to how many elements */
var spliceVar = stringArray.splice(4, 1);
console.log("removing using splice method :: " + spliceVar);
console.log("after removing 4th index size of the array is :: " + stringArray.length);
/* splice with one parameter  for removing specify index element to all */
var spliceVar1 = stringArray.splice(2);
console.log("removing using splice method :: " + spliceVar1);
console.log("after removing size of the array is :: " + stringArray.length);
/* string inbuilt methods */
/*
let str: string = new String("TypeScript Practice");
console.log("str.charAt(0) is:" + str.charAt(0));
console.log("str.charAt(2) is:" + str.charCodeAt(2));
 */
/*
let str1 = new String( "TypeScript" );
let str2 = new String( "Practice" );
let str3 = str1.concat( str2 );
console.log("str1 + str2 : "+str3);

let index = str.indexOf( "Script" );
console.log("indexOf found String :" + index );

let lastInd = str.lastIndexOf("t");
console.log("lastIndexOf found String :" + lastInd );

let str5 = new String( "This is local compare method" );

let localCom = str5.localeCompare( "This is local compare method");
console.log("localeCompare first :" + localCom );

let re = "apples";
let strRe = "Apples are round, and apples are juicy.";
let newstr = strRe.replace(re, "oranges");
console.log(newstr);
 */
