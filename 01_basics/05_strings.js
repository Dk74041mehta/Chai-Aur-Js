// string can be declare AS using  ' ' or  " "

// const name = "Dilip Mehta "
// const repoCount = 50

// console.log(name+repoCount + "  Value");  //old techniques

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //today techniques string interpulation

const gameName = new String('Dilip Mehta') //new syntax to declare string [using constructor() and object]

// console.log(gameName);



// console.log(gameName[0]);
// console.log(gameName.__proto__);   //accessing prototype -op-object{}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('i'));  

// const newString = gameName.substring(0, 11)  //start and ending number which is not execluded
// console.log(newString);

// const anotherString = gameName.slice(-10, 4)
// console.log(anotherString);

// const newStringOne = "   Dilip   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //remove starting and empty space



const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))  //changing value and updating value

console.log(url.includes('sundar'))  //checking value present in array or not

console.log(gameName.split(' ')); //spreter and limiterf





