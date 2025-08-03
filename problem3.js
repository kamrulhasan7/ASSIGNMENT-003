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