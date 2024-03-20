let p = new Promise((resolve,reject)=>{
    let chai=['sugar','tea_leaves','milk'];

    if(chai.length==3){
        resolve('Chai Delevered');
    }else {
        reject('Chai Not Delevered');
    }
})


// p.then((meassage)=>{
//     console.log('Bangai ' + meassage);
// }).catch((meassage)=>{
//     console.log('Nai Banpai Sorry :( ' + meassage);
// })



// let fetch_ = fetch('https://www.boredapi.com/api/activity');


// // let fetch_ = fetch('https://httpstat.us/404');

// console.log(fetch_)

// fetch_.then(response =>{
//     if (!response.ok){
//         throw new Error('Network response Error');
//     }
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(message =>{
//     console.log(`Not Possible to reach` + message)
// })


//after promise chain we using await


// async function getActivity(){
//     let response = await fetch('https://www.boredapi.com/api/activity');
//     return response.json();
// }

// getActivity().then(
//     data =>{
//         console.log(data.activity);
//     }
// )

//if somthing gone wrong the we use simple try catch block 


async function getActivity(){
   try{
    let response = await fetch('https://www.boredapi.com/api/activity');
    return response.json();
   } catch (error){
    console.error(`ERROR : ${error}`);
   }
}

getActivity()
