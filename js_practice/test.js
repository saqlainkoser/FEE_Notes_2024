//Select an elem from js 
//select many elem
//node concept
//changing an element of html
//adding new attr
//css change
//event listener
//Select an elem from js 
let ele=document.querySelector('h1');
console.log(ele);

let ele_one=document.getElementsByClassName('one')[0];
console.log(ele_one);


//node concept
console.log(ele.parentNode);

//chnaging 
// ele.innerText='<li>Today is Tuesday.</li>'
ele.innerHTML='<li>Today is Tuesday.</li>'


//css change
ele.style.backgroundColor="red";
ele.style.color="white";

//event listner

ele.addEventListener('click' , () => {
    ele.style.backgroundColor='yellow';
})


let cont=document.getElementsByClassName('container');

let new_ele=document.createElement('h3');
new_ele.innerText='this is my js created element';

cont[0].appendChild(new_ele);



