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
