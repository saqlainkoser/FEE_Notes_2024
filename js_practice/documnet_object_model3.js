// let HTML={
//     head: {
//         title: "this is my first heading"
//     }
// }

// Document Object Model

//Selecting an element
//Select all ele
//changing an ele
//changing css
//Node Concept
//add atrr
//Event listner


//select an ele
let ele=document.querySelector('h1');

console.log(ele);

let parent=document.getElementsByClassName('container')[0];

console.log(parent);

//select all ele

let allh1=document.querySelectorAll('h1');
console.log(allh1);

//changing an element 
ele.innerText="<li>Today is Tuesday.</li>"
ele.innerHTML="<li>Today is Tuesday.</li>"

//changing css
ele.style.backgroundColor='red';

//Node concept

console.log(ele.parentNode);

let new_ele=document.createElement('h3');

new_ele.innerText="This is my js created tag";

ele.parentNode.appendChild(new_ele);


// add att

ele.className="one";
ele.id="two";

//Event Listener

ele.addEventListener('click', () => {
    ele.style.backgroundColor='yellow'
})