function test(): void{
  console.log("no argument no return");
}

let expressionFun = function(){
  console.log("no argument no return with expression function");
}

function test1(): void{
  let name: string = "Latha";
  console.log(name);
}

let testing = test1();

test();
expressionFun();
//testing;
