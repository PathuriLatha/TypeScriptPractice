/*  Defining empty string array  */
let stringArray: Array<string> = [];

console.log("before adding size of the array is :: "+stringArray.length);

/* Adding values to stringArray */
stringArray.push("HTML");
stringArray.push("CSS");
stringArray.push("JavaScript");
stringArray.push("JQuery");
stringArray.push("Bootstrap");
stringArray.push("TypeScript");
stringArray.push("Angular");
stringArray.push("Spring");
stringArray.push("Hibernate");

console.log("after adding size of the array is :: "+stringArray.length);

/*  Removing values from stringArray  */
let removingElement: string = stringArray.pop(); //it's removing last index of the element
console.log("Removing value :: "+removingElement);

console.log("after removing size of the array is :: "+stringArray.length);

let removingElement1: string = stringArray.pop();
console.log("Removing value :: "+removingElement);

console.log("after removing size of the array is :: "+stringArray.length);


let spliceVar: string[] = stringArray.splice(4, 1);
console.log("removing using splice method :: "+spliceVar);

console.log("after removing 4th index size of the array is :: "+stringArray.length);

let spliceVar1: string[] = stringArray.splice(2);
console.log("removing using splice method :: "+spliceVar1);

console.log("after removing size of the array is :: "+stringArray.length);


