let text =document.getElementById('h2#text');
let front1=document.getElementById('front1');
let front2=document.getElementById('front2');
let front3=document.getElementById('front3');
let front4=document.getElementById('front4');


window.addEventListener('scroll', () => {
    let x=window.scrollY;
    text.style.marginTop= x * 2.5 + 'px';
    front1.style.top=x* -1.5 + 'px';
});