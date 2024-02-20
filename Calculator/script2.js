const display=document.getElementById('display');


function appendToDisplay(input){
    vibrate()
    display.value += input;
}


function clearDisplay(){
    vibrate()
    display.value="";
}


function calculate(){
    vibrate()
    try {
        display.value=eval(display.value);
        
    } 
    catch (error) {
        display.value="Error"
    }
}

function deletePrivious(){
    vibrate()
    if (display.value=='Error') {
       display.value='';
    }
   let str=display.value;
   let array=str.split('');
   array.pop();
   display.value=array.toString().replaceAll(',','')
   ;
}

function vibrate(){
    if(!("vibrate" in navigator)){
        alert("Vibrate not supported!");
     return;
     }
    navigator.vibrate(20);
   }