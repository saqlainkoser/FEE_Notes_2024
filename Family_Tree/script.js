document.querySelectorAll('.plus').forEach(item => {
    item.addEventListener('click', event => {
        const expandDiv = event.target.parentNode.nextElementSibling;
        if (expandDiv.classList.contains('expand')) {
            // document.getElementsByClassName("plus")[0].textContent='+'
            expandDiv.classList.remove('expand');
            expandDiv.classList.add('hide');
        } else {
            expandDiv.classList.add('expand');
            expandDiv.classList.remove('hide');
            // document.getElementsByClassName("plus")[0].textContent='-'
        }
    });
});


let namelist=['Saqlain','Rehan','Ayan'];

function myFunction(){
    const parent =  document.getElementsByClassName('container')[0] ;
    const node=document.createElement('div');
    node.classList.add('expand');
    const textnode = document.createTextNode("Saqlain");
    node.appendChild(textnode);
    parent.appendChild(node);
}

