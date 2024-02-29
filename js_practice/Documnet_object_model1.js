//Documnet Object Model

//selecting  an element
//selecting all ele
//changing html
//changing css
//Node concept
//Adding Atrr
//Event Listener


let ele=document.querySelectorAll('h1')[0];

console.log(ele);

//changing html
ele.innerText="<li>Today is Tuesday.</li>";
ele.innerHTML="<li>Today is Tuesday.</li>";

//changing in css
ele.style.backgroundColor='red';

//Node concept
console.log(ele.parentNode);


let new_ele=document.createElement('h3');
new_ele.innerText="This is my js created ele";

ele.parentNode.appendChild(new_ele);


ele.className="one";
ele.id="two";

//Event listener

let flag=0;

ele.addEventListener('click', ()=>{
    if(flag==0){
        ele.style.backgroundColor='yellow'
        flag=1;
    }
    else{
        ele.style.backgroundColor='red'
        flag=0;
    }
})