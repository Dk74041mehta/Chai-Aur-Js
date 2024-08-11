/* 
kis trah se data ko memory mai rakha jata hai
 aur acces kiya jata hai uss bases
 par datatpes ko 2 part mai categorise kiya gaya hai
*/


//1)  ***Primitive  or built-in***  -> yeh call by value inka memory ka 
// refernce nahi dete hai isse copy krke diya jata hai
 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3



/*JavaScript is a dynamic language and not static,
 which means that variables can hold values of different types during runtime.
 Unlike languages such as Typescript or Java,
 you don't need to declare the data type of a variable explicitly.
 */


const isLoggedIn = false
const outsideTemp = null
let userEmail;


//symbol-> it's not return value for passing same value
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//big int example
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)  ->inka data-type object hota h

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 2,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
