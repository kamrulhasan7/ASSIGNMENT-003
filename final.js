/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var divide = area / 2;
console.log(divide);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
} 
else if (money >= 10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for(let n = 1; lastDay >= n; n++ ){
    if(n % 3 === 0){
        console.log(n + ' - ' + 'medicine');
    }
    else{
        console.log(n + ' - ' + 'rest');
    }
}


/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (
  fileName.slice(0, 1) == "#" ||
  fileName.slice(-4) == ".pdf" ||
  fileName.slice(-5) == ".docx"
) {
  console.log("Store");
} 
else {
  console.log("Delete");
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(let n = 1; n<=experience; n++){
    var percentage = startingSalary * 5 / 100;
    startingSalary += percentage;
}
console.log(startingSalary.toFixed(2));