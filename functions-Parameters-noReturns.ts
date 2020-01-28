function courses(courses: string[]): void{
  courses.forEach(function(val){
    console.log(val);
  });
}

let stringList: string[] = ["Java", "HTML", "Angular"];

let callCourses = courses(stringList);


let students = function(studentsList: string[]){
  studentsList.forEach(function(val){
      console.log(val);
  });
}

let studentsArray: string[] = ["Latha", "Rama", "Bhargavi"];
students(studentsArray);

let division = function(div: number, a?: number){
  if(a){
    console.log(div/a);
  }
  else{
    console.log(div);
  }
}

division(123, 12);
division(21);

let restParameter = function(a: number, ...names: string[]){
  console.log(a+" "+names.join(", ") );
}

restParameter(11, "Shirisha", "srivani");
restParameter(120, "Lasya", "Meghana", "LoukhyaSri");
