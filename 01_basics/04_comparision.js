// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

 
// console.log("2" > 1);   //true becuase because engine convert string into number automaticaly
// console.log("02" > 1); 


// *** Avoid These Type of Conversions ***

console.log(null > 0); //false
console.log(null == 0); //flase
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0);        //false

// ===   strict check

console.log("2" === 2);  //also check data-types 