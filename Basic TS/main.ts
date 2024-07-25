// const firstName='Hosni Rabbani'; 
// firstName='Ashraful';
// console.log(firstName);
//export {};  //Will not be used always or usually

let fullName:string="Ashraful Haque";
let age:number=50;
let skill:string="MERN Stack";  //Explicit Type
let isSenior:boolean=false;     //Explicit Type
let contest=23.33;      //Implicit Type
let sunday='Rofiq';     // Implicit Type
// age='Tobarak';
let devs:string;
devs='Rabul';
// devs=false;
let raqul:any;
raqul=22;
console.log(raqul);
console.log(devs);
console.log(fullName);

// any datatype
let noor:string | number;  //  |=> union sign
noor=1000;
console.log(noor);
export {};

// basic data Types of typescript
//string, boolean, number, any ,union(|)