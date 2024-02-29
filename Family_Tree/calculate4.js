

let display=document.getElementsByClassName('display')[0];


//toaddDisplay()
//clrscr()
//calculate()
//delLast()

function toaddDisplay(val){
    display.value+=val;
}

function clrscr(){
    display.value='';
}

function calculate(){
    display.value=eval(display.value);
}

function delLast(){
    let str=display.value.slice(0,-1);
    display.value=str;
}