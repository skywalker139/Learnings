// === type bhi check krta h

if (2=="2") {
    console.log("== executed");
}

if (2==2) {
    console.log("=== executed");
}

if (2!=="2") {
    console.log("!== executed");
}

//var --> global scope h, isliye yha pe var ki jagah let use krna chahiye
// if (balance > 500) console.log("test") , console.log("tests2") ;

const month=3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        
        break;
    default:
        console.log("default");
        break;
}

//falsy values
//undefined, null, 0, '', NaN, false, -0, BigInt 0n

//truthy values
//[], {}, function(){}, 1, "0" , 'false', -1, 1n

const userEmail=[]

if (userEmail.lenght===0) {console.log("empty array");}

const emptyObj={};

if (Object.keys(emptyObj).length===0) {console.log("empty object");}

//Object.keys(emptyObj) --> reutrns an array of keys of object

//false == 0  --> true
//false == '' --> true
//0 == ''     --> true

// Nullish Callesing Operator (??) : null undefined

let val1; 
// val1 = 5 ?? 10 --> 5 (jo pehle aya)
// val1 = null ?? 10; --> 10 (null value k liye check krega)
//var1= undefined ?? 15 --> 15 (undefined value k liye check krega)
//val1= null ?? 15 ?? 20 --> 15
//val1 = 0 ?? 15 ?? 20 --> 0 (0 is not null or undefined)
console.log(val1);

// ******************* Ternary operator *******************

//condition ? true : false


let score = 11
do{
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);