let myObj={
    firstname:"Shaan"
}

myObj.firstname;


//Select an element

 let ele = document.querySelector('h1');


 //Changing an element
    // ele.innerText="Its My class"
    // ele.innerHTML="<li>Its my link</li>"
    console.log(ele);


//Select many elements

let many = document.querySelectorAll('h1');
    console.log(many[0]);


//Node concept

console.log(many[0].parentElement);

let onemore = document.createElement('h3');
onemore.innerText="This is created by JS";

let parent_ele= many[0].parentElement;

parent_ele.appendChild(onemore);


//Adding new attr
ele.className="thsdh"
ele.id="rehan"


//Change css 
ele.style.backgroundColor="red"
ele.style.color="white"



//Event listner 
let flag=0;
ele.addEventListener('mouseover' , ()=>{
    if (flag==0) {
        ele.style.color="black";
        ele.style.backgroundColor="yellow";
        flag=1;
    } else {
        console.log('Yes its clicked.');
        ele.style.backgroundColor="red";
        flag=0;
    }
})







