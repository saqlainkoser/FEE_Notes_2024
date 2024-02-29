
let display=document.getElementsByClassName('display')[0];



function addToDisplay(val){
    display.value+=val;
}


function clrscr(){
    display.value='';
}

function calculate(){
    display.value=eval(display.value);
}

function dellast(){
    let str=display.value;
    let arr=str.split('');
    arr.pop();
    display.value=arr.toString().replace(',','');
}