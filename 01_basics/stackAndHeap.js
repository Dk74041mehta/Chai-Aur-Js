// Memory in js

const { log } = require("console");

// 1)stack -> premitive datatypes  - we get a copy of variable

// let myName="Dilip"


// let yourName=myName
// yourName="kumar"
// myName="light"
// console.log(yourName);
// console.log(myName);





// 2)heap -> non-premitive datatypes - we get a refernece if
// we change to reference it also change the original value

let object1={

    key:'DON23',
    name:"light"
}

// console.log(object1);


let object2=object1
// console.log(object2);


object2.name="Dilip"

console.log(object2.name);
console.log(object1.name);


