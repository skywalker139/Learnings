function loginUserMessage(username = "User"){    // default value = user
    // if (username === undefined) {
    if (!username){
        console.log("please enter an username")
        return
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Obi-wan Kenobi"));
// console.log(loginUserMessage());   // "undefined just logged" in ayega

function calculateCartPrice(val1, val2, ...num1){   // ... = rest operator, bundle(array) bna k de dega
    return num1
}

// console.log(calculateCartPrice(300,200,400,500))  // prints [400,500]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// ++++++++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(addone(5))  // ye chl jayega

function addone(num){
    return num + 1
}

addTwo(5)           // ye nhi chalega

const addTwo = function(num){
    return num + 2
}