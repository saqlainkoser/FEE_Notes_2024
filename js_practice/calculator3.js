

let display=document.getElementsByClassName('display')[0];

//addToDisplay()
//clrscr()
//calculate()
//delLast()



function addToDisplay(val){
    display.value+=val;
}


function clrsrc(){
    display.value='';
}

function calculate(){
    display.value=eval(display.value);
}

//delLast

function delLast(){
    let str='';

    for(i=0;i< (display.value.length-1);i++){
         str+=display.value[i];
    }
    display.value=str;
}

