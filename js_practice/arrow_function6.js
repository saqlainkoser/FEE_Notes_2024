//Arrow Function

//1

function add(a,b){
    return a+b;
}

let add2 = (a,b) => a+b;


console.log(add(3,4));
console.log(add2(3,4));


//2

function isPositive(num){
    return num>=0;
}

let isPositive2 = num => num>=0;


//3

function randomNum(){
    return Math.random();
}

let randomNum2= () => Math.random();


//4

document.addEventListener('click', () => {
    console.log('Its clicked.')
});