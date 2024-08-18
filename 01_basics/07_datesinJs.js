// // Dates  //date is a object in Js

let myDate = new Date()

// console.log(myDate.toString());  //Sun Aug 18 2024 20:52:04 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); //8/18/2024, 8:53:50 PM

// console.log(myDate.toDateString());  //Sun Aug 18 2024
// console.log(myDate.toLocaleDateString());//8/18/2024

// console.log(myDate.toISOString());//2024-08-18T15:22:04.348Z
// console.log(myDate.toJSON());//2024-08-18T15:22:04.348Z
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2024, 12 ,19)         //1/19/2024, 12:00:00 AM   
// let myCreatedDate = new Date(2024, 0, 1, 9, 5)   //1/1/2024, 9:05:00 AM  //In JS Month Start with 0
let myCreatedDate = new Date("2024-08-18")       //8/18/2024, 5:30:00 AM
// let myCreatedDate = new Date("01-14-2023")        //1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()    //time in miili-seconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   //in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


//***string interpulation***

// `${newDate.getDay()} and the time `



// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })



/*ctrl+ space to show properties or Methods  */