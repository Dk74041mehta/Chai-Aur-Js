//Declaring variables

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345" //issue of block and functional scope
accountCity = "Jaipur"  //not good way to declare variables
let accountState;  //undefined

/* scope: {}  and
semicolon is not imp to use in js

*/

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])