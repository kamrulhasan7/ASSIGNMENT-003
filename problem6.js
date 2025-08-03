/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(let n = 1; n<=experience; n++){
    var percentage = startingSalary * 5 / 100;
    startingSalary += percentage;
}
console.log(startingSalary.toFixed(2));


//  no work below
// var percentage = (1 + .5) ^ experience ;
// console.log(percentage);
// var currentSalary = experience * percentage;
// console.log(percentage * startingSalary)
// var currentSalary;
