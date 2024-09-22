const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);     //this => current context
        console.log(this);     // {username} nhi likh skte,  {this.username} likhna padega
    }
}
//ye object h iske andr hi "this" kaam krega, functions k andr nhi


// user.welcomeMessage()
// user.username = "sam"   //current context change kr diya 
// user.welcomeMessage()   //sam welcome krke ayega

console.log(this)  // {} de dega because currently context me kuchh nhi h

function chai(){
    const username = "hello";
    console.log(this);
    // console.log(this.username)  //  =undefined de dega
}

// chai()  // kuchh bekar sa de dega aur this.username(=hello) bhi print nhi krega
//       ++++++++++++++++++                        +++++++++++++++++++++++++++++++
//       ++++++++++++++++++      ARROW FUNCTION    +++++++++++++++++++++++++++++++
//       ++++++++++++++++++                        +++++++++++++++++++++++++++++++

// function ko short me likhne me madad krte h

// const myFunction = () => {
//     let username = "hello"
//     console.log(this);    // {} de dega
// }

// const addTwo = (numl, num2) => {
//     return numl + num2;
// }

const addTwo = (numl, num2) => (numl + num2)   //  implicit return   {} me wrap kiya to return keyword likhna padega

//const addTwo = (numl, num2) => ({username: "hitesh"})   // returning object

console.log(addtwo(3,4));
