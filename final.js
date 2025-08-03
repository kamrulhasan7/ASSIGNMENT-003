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