document.getElementById('btn-load').addEventListener('click',getProducts);

let div=document.querySelector('.showcase');


function getProducts(){
    //1. create an XMLHttpRequest Object
    let xhr=new XMLHttpRequest();

    //2. Create the request
    //method ,url,async/sync,id,pass
    xhr.open('GET', 'products.json',true);


    //3. Send the request
    xhr.send();


    //when request is sent and data is not comletely loaded yet
    xhr.onprogress =function(){
         div.textContent= 'Loading...';
    }

    xhr.onload=function(){
        //convert JSON to JS object
        //2
        let products=JSON.parse(xhr.responseText);
        1// console.log(xhr.responseText);
        3// console.log(products);

        //Destructuring the array
        let{arrayOfProducts} = products;
        console.log(arrayOfProducts);

        arrayOfProducts.forEach(element => {
            let html =`
            <div style="display: flex; font-size: 14px ; height: 130px; margin: 20px 10px;">
                <div><img src="${element.imgUrl}" height="145" width="180"></div>
                <div style="padding: 5px 10px;"><p>${element.name}</p></div>
                <div style="font-size: 12px; padding: 5px 10px;"><p>${element.description}</p></div>
                <div style="padding: 5px 10px;"><p>${element.price}</p></div>
            </div>
            `
            div.insertAdjacentHTML('beforeend',html);
        });

    }



}