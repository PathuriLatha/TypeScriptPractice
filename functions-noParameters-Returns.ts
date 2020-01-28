function myFunction(): string{
  return "no parameter function";
}

function arrayFunction(): number{
  //let stringArray: string[] = ["one", "Two", "Three"];
  /* stringArray.forEach(function(data){
    return data;
  }); */
  /* for(let x=0; x<stringArray.length; x++){
    return stringArray[x];
  } */
  let numberArray: number[] = [102, 1, 0, 3];
  for(let x=0; x<numberArray.length; x++){
    if(numberArray[x] >= numberArray.length){
      return numberArray[x];
    }
    else{
      return 0;
    }
  }
}

let expressionNoParameter = function(): any{
  return "expressionNoParameter";
}

let callFunction = arrayFunction();

console.log(myFunction());
console.log(callFunction);
console.log( expressionNoParameter() );
