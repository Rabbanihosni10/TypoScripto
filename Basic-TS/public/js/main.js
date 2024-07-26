"use strict";
// const ageCal=(name: string="Asraf",age: number=30):void /*: string*/=>{
//     // return `Hi ${name}, you are ${age} years old`;
//     // return age; will show error that the expected return value is string not number
//     // return name;
//     console.log(`Hi ${name}`);
// };
// ageCal("Ashraful Haque",30);
// //if nothing return from function then void will be used in a function perametter type
// const info = (name: string): void =>{
//     console.log("");
// };
const ageCal = (name = "Asraf", age = 30) => {
    console.log(`Hi ${name}`);
    // return name;
};
const info = (name) => {
    throw new Error("");
};
