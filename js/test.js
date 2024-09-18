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

const name = "hitesh"
const repoCount = 50
// console. log(name + repoCount + " Value");
console.log (`Hello my name is ${name} and my repo count is ${repoCountF}`);

const balance = new Number(100)
console.log (balance.toFixed(1)); //1 mtlb 1 decimal places tk

const hundreds = l000000
console.log (hundreds.toLocaleString('en—IN')); //10,00,000 aise de dega

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min) //