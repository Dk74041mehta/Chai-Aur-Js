// Memory in js

const { log } = require("console");

// 1)stack -> premitive datatypes  - we get a copy of variable

// let myName="Dilip"
// console.log(myName);


// let yourName=myName
// yourName="kumar"
// console.log(yourName);




// 2)heap -> non-premitive datatypes - we get a refernece if
// we change to reference it also change the original value

let object1={

    key:'DON23',
    name:"light"
}



let object2=object1
object1.key="Mehta"

object2.name="Dilip"

console.log(object2.name);
console.log(object1.key);


