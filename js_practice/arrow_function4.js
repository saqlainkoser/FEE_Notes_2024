//Arrow Function 
//syntax small
//this 

//1
function sum(a,b){
    return a+b;
}

let sum2 = (a,b) =>  a+b;

console.log(sum(3,4));
console.log(sum2(3,4));



//2
function isPositive(num){
    return num>=0;
}

let isPositive2= num => num>=0;


//3
function randomNum(){
    return Math.random();
}

let randomNum2 = () => Math.random();


//4
document.addEventListener('click',function(){
    console.log("Its clicked.")
})

document.addEventListener('click',() => {
    console.log("Its clicked.")
})