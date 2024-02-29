
//Documnet Object Model

//selecting  an element
//selecting all ele
//changing html
//changing css
//Node concept
//Adding Atrr
//Event Listener



//select an element
let ele=document.querySelector('h1');
console.log(ele);

let parent=document.getElementsByClassName('container')[0];
console.log(parent);

//Node Concept 

console.log(ele.parentNode)

let new_ele=document.createElement('h3');
new_ele.innerText="this is js created heading";

ele.parentNode.appendChild(new_ele)




//changing html

ele.innerText="<li>Today is Tuesday</li>"
ele.innerHTML="<li>Today is Tuesday</li>";



//changing css

ele.style.backgroundColor="red"


//Adding new attr
ele.className="one";
ele.id="two"


//Event Listener
ele.addEventListener('click', () => {
    ele.style.backgroundColor="yellow"
})