//Javascript is single threaded sync language
//Engine will not wait for anything
//async function returns promise


// function dataleaoo(){
//     return 'This is return of my simple function';
// }

// console.log(dataleaoo());


// //async function

// async function dataleaoo2(){
//     return 'This is return of my simple function';
// }

// console.log(dataleaoo2());



// Example #2; awit keyword

// let p = new Promise((resolve,reject)=>{
//     resolve('This is my Data..');
// })



// async function getTheData(){
//     console.log(p);
//     await p.then(val=>console.log(val));
//     console.log("data aaene ke baad ka kaam.");
// }

// getTheData();


// Example #3 


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('This is my Data..');
//     },5000);

// })


// async function getTheData(){
//     await p1.then((val)=> console.log(val));
//     console.log('first');
// }

// getTheData();



// Example number 4 Ap

async function getMyData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data is here >>>>>");
        },3500)
    })
}


async function processData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Processed Data is here >>>>>");
        },4000)
    })
}


async function main(){
console.log("Module Loading");
console.log("Work1");

let p= getMyData();"Data Feching"
await p.then((val)=> console.log(val));

console.log("Process Data");
let pd= processData();
await pd.then((val)=> console.log(val));


console.log("Final Presentation.");
}

main();