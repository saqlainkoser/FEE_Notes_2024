
let display=document.getElementsByClassName('display')[0];


//toAddDisplay

function toAddDisplay(val){
    display.value+=val;
}

//clrscr
function clrscr(){
    display.value='';
}

//calculate

function calculate(){
    display.value=eval(display.value);
}

//delLast

function delLast(){
    let str=display.value;
    let ind=str.length-1;
    display.value=str.replace(str[ind],"");

}