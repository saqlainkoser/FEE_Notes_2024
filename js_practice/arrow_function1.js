//Arrow Function

//1 simple function
function add(a,b){
    return a+b;
}

let add2 = (a,b) =>  a+b;

console.log(add(1,2));
console.log(add2(1,2));


//2
function isPositive(num){
    return num>=0;
}


const isPositive2 =(num) => num>=0;


//3
function randomNumber(){
    return Math.random();
}

let randomNumber=() => Math.random();


// 4


document.addEventListener('click',() => { console.log('this is my simple function');})