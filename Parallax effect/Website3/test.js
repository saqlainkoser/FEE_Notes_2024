//data types
//primitive datatypes - string , number , boolean , null , undefiend , symbol ,Bigint;

let x='shaan koser';
let y=`this is ${x}`;
let z="shaandaar";

let multiline=`shaan 
koser 
ansari`

console.log(x);
console.log(y);
console.log(z);
console.log(multiline);


//using constructor 

let byconstructor= new String('created by constructors');

console.log(typeof(byconstructor));


//Basic Functions on Strings

let str='JavaScript is Awesome Language';

//to find length 
console.log(str.length);


//to concatenate 

let str1=" said by shaan";
console.log(str+str1);

//escape characters

let str3="\\shaan\\";
console.log(str3);



//to find substring

let str4=' My name is shaan ';
console.log(str4.substring(0,2));


//converting to Upper Case

console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

//String Search 

console.log(str4.indexOf('shaan'));


//String replace
console.log(str4.replace('shaan','G29'))


//Space trimming
console.log(str4.trim());

//Access character from string

console.log(str4[7]);


console.log(0.22+0.12)

