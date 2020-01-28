function myFunction() {
    return "no parameter function";
}
function arrayFunction() {
    //let stringArray: string[] = ["one", "Two", "Three"];
    /* stringArray.forEach(function(data){
      return data;
    }); */
    /* for(let x=0; x<stringArray.length; x++){
      return stringArray[x];
    } */
    var numberArray = [102, 1, 0, 3];
    for (var x = 0; x < numberArray.length; x++) {
        if (numberArray[x] >= numberArray.length) {
            return numberArray[x];
        }
        else {
            return 0;
        }
    }
}
var expressionNoParameter = function () {
    return "expressionNoParameter";
};
var callFunction = arrayFunction();
console.log(myFunction());
console.log(callFunction);
console.log(expressionNoParameter());
