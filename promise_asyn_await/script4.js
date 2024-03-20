//Promise Object Explaination

// let Waiter_Ratings=0;

// let p= new Promise((resolve,reject)=>{
//     let chai = ['sugar','milk','tea_leaves'];

//     if(chai.length==3){
//         resolve(Waiter_Ratings+=5);
//     }else{
//         reject(Waiter_Ratings-=5);
//     }

//     return Waiter_Ratings;
// })


// p.then(message=>{
//     console.log(`Chai Ban Gai Hai Ratings: ${message}`)
// }).catch(message=>{
//     console.log(`Chai Nahi Ban Pai :( Ratings: ${message}`)
// })


//Fetch API 


let fetch_=fetch('https://www.boredapi.com/api/activity')

console.log(fetch_);

fetch_.then(reponse=>{
    return reponse.json();
}).then(data =>{
    console.log(data);
}).catch(message=>{
    console.log(`Not Possible to Fetch ${message}`);
})