let display=document.getElementsByClassName('display')[0];
// console.log(display);

function appendToDispaly(val){
    display.value+=val;
}



function clrscr(){
    display.value="";
}


function calculate(){
    let x=display.value;
    display.value=eval(x);
}

function deletePrivious(){
    if (display.value=='Error') {
        display.value='';
     }
   let str=display.value;
   let array=str.split('');
   array.pop();
   display.value=array.toString().replaceAll(',','');
}