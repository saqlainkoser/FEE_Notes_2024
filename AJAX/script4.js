
document.getElementById('btn-load').addEventListener('click',getProducts);

let div=document.querySelector('.showcase');


function getProducts(){
    //1. creating XMLHttprequest object
    let xhr=new XMLHttpRequest();

    //2. creatin request
    //Arguments - method , url  , async/sync , id ,pass
    xhr.open('GET','products.json',true);

    //3. sending request
    xhr.send();


    //4. when data is fetching 
    xhr.onprogress = function(){
        div.textContent='Loading......';
    }

    //5 when data is arrived
    xhr.onload = function(){
        // console.log(xhr.responseText);

        let product=JSON.parse(xhr.responseText);
        // console.log(product);

        //De-Structuring
        let {arrayOfProducts}=product;
        // console.log(arrayOfProducts);

        arrayOfProducts.forEach(element => {
            let html=`
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