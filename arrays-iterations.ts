let numbers: number[] = [100, 200, 300, 400, 500];

/*         Iterating using 'forEach'        */
console.log("Iterating with forEach");
numbers.forEach( function(value) {
  console.log(value);
});

/*         Iterating using 'for loop'      */
console.log("Iterating with for loop");
for(let i=0; i<=numbers.length-1; i++){
  console.log(numbers[i]);
}

/*         Iterating using 'forIN'        */
console.log("Iterating with forIN");
for( let j in numbers ){
  console.log(j);
}

/*         Iterating using 'forOF'        */
console.log("Iterating with forOF");
for( let k of numbers ){
  console.log(k);
}

let list: Array<string> = ["Java", "Angular", "Oracle"];
/* Iterating using forEach */
console.log("Using forEach");
list.forEach( function(data){
  console.log(data);
});

/* Iterating using for loop */
console.log("using for loop");
for(let x=0; x<=list.length-1; x++){
  console.log(list[x]);
}

/* Iterating using forOf */
console.log("using forOf");
for(let courses of list){
  console.log(courses);
}

