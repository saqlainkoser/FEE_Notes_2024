// let Waiter_Ratings=0;

// let p= new Promise((resolve,reject)=>{
//     let chai=['sugar','milk'];

//     if(chai.length==3){
//         resolve(Waiter_Ratings+=5);
//     }else{
//         reject(Waiter_Ratings-=5);
//     }
// })

// p.then(message=>{
//     console.log(`Chai Ban Gai Ratings:${message}`)
// }).catch(message=>{
//     console.log(`Chai Nahi Ban Pai :( Ratings:${message}`)
// })



//fetch API

// let fetch_=fetch('https://www.boredapi.com/api/activity');


// console.log(fetch_);

// fetch_.then(response =>{
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(message=>{
//     console.log(`This is Not Possible To Fetch ${message}`)
// })


//ASYNC AWAIT FUNCTION


//JAVA SCRIPT IS SINGLE THREDED SYNCRONUS LANGUAGE
//Engine will not wait for any thing 
//ASYNC function always return a promise
//await keyword always used inside async function
// async function is also used to avoid promise chain


// console.log('ASYN AWAIT TUTORIAL');


//async await keyword
// This is return of async function


//Making user defined promise

//Async function vs simple function


// async function datalaao(){
//     return 'Data retured by async function';
// }

// function datalaao2(){
//     return 'Data retured by simple function';
// }

// console.log(datalaao().then(res => console.log(res)));
// console.log(datalaao2());


//using await keword 


// let p= new Promise((resolve,reject)=>{
//     resolve('this is return value of promise');
// })


// async function getTheData(){
//     // p.then(res=> console.log(res));
//     await p.then(res=> console.log(res));
//     console.log('first'); //Data Modification # 1
//     console.log('second');// Data modification #2
// }

// console.log(getTheData())



// let p1= new Promise((resolve,reject)=>{
    //     resolve('this is return value of promise1');
    // })
    
    // let p2=  new Promise((resolve,reject)=>{
        //     resolve('this is return value of promise2');
        // })
        
        // async function getTheData(){
            //     await p1.then(res=> console.log(res));
            //     console.log('first'); //Data Modification # 1
            
            //     await p2.then(res=> console.log(res))
            //     console.log('second');// Data modification #2
            // }
            
            // getTheData()
            
 
// if data fetch taking time 

let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('this is return value of promise1');
    },5000)


})

let p2=  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('this is return value of promise2');   
    },10000)

})


let p3=  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('this is return value of promise3');   
    },7000)

})

async function getTheData(){
    await p1.then(res=> console.log(res));
    console.log('first'); //Data Modification # 1

    await p2.then(res=> console.log(res))
    console.log('second');// Data modification #2
    
    await p3.then(res=> console.log(res))
    console.log('third');// Data modification #2
    
}

getTheData()



// Example 2 



async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data is here...')
        },5000);
    })
}



async function main(){

console.log("Loding modules");

console.log("Work1");

console.log("Fetching ... Data");
let p=  await getData();
// console.log(p.then((val)=>console.log(val)));

    console.log(p);

    console.log("process data");

    console.log("Work2");
}

main()


