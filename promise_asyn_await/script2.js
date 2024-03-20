// let Waiter_Ratings=0;

// let p = new Promise((resolve,reject)=>{
//     let chai= ['sugar','milk'];

//     if(chai.length==3){
//         resolve(Waiter_Ratings+=5);
//     }else {
//         reject(Waiter_Ratings-=5);
//     }

//     return Waiter_Ratings;
// })

// p.then((message)=>{
//     console.log('Chai Bangai Hai Rating: '+ message );
// }).catch((message)=>{
//     console.log('Chai nahi ban Paai :( Rating: ' + message);
// })


// fetch api



let fetch_=fetch('https://www.boredapi.com/api/activity');

fetch_.then(response =>{
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(message=>{
    console.log(`Not Possible to fetch : ${message}` );
})

