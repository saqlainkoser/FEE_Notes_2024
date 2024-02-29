//Arrow function

//1 in simple function
function sum(a,b){
    return a+b;
}

//1 in arrow function
let sum2 = (a,b) => a+b;
let sub= (a,b) => a-b;


//2 in simple function
function isPositive(num){
    return num >= 0;
}


//2 in arrow function
let isPositive2 = num => num >= 0;

console.log(isPositive(45));
console.log(sum2(5,6));


//3 
function randomNumber(){
    return Math.random();
}  

//3 arrow
const randomNumber2 = () => Math.random  ; 


//4
document.addEventListener('click',function(){
    console.log('my page is clicked')
})

//4 arrow
document.addEventListener('click', () => { console.log('my page is clicked')})

