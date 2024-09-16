const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

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

console. tog (typeof undefined); // undefined
console. log (typeof null); // object

let valuelnNumber = Number(score) //type conversion, capital N
// "33" => 33
// "33abc" => NaN
// false => 0
// true => 1
