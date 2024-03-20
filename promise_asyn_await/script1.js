// script1.js


// let Waiter_Ratings=0;

// let p = new Promise((resolve,reject)=>{
//     let chai=['sugar', 'tea_leaves','milk'];

//     if(chai.length==3){
//         resolve(Waiter_Ratings+=5);
//     }else{
//         reject(Waiter_Ratings+=-5);
//     }

//     return Waiter_Ratings;
// })

// p.then((message)=>{
//     console.log('Chai Delevered Waiter rating: ' + message);
//     //Work
// }).catch((meassage)=>{
//     console.log('Nahi Banpai Sorry :( Waiter rating: ' + message);
//     //Work
// })


//fecth api 


// let fetch_ =fetch('https://www.boredapi.com/api/activity');

// // console.log(fetch_);


// fetch_.then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(message =>{
//     console.log(`Not Possible to reach` + message)
// })


// console.log("me first");
//is problem ko hatane ke liye hai asyn/await



// after promise chain we using await

// async function getAcivity(){
//     let response = await fetch('https://www.boredapi.com/api/activity');
//     return response.json();
// }

// getAcivity().then(data => {
//     console.log(data.activity);
// }).catch(error =>(
//     console.log(`ERROR : ${error}`)
// ));



// 

async function getActivity(){
    try{
     let response = await fetch('https://www.boredapi.com/api/activity');
     return response.json();
    } catch (error){
     console.error(`ERROR : ${error}`);
    }
 }
 
 console.log(getActivity().then(data => {
        console.log(data.activity);
    }));

console.log("me first");




