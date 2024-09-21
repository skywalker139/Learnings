// const tinderUser = new Object()
const tinderUser = {}  //same kaam krega

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }   //mdn- 2 arguments k liye target aur source hota h, multiple k liye {}
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //{} target baki sb source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email

console.log(Object.keys(tinderUser));   //keys mil jayengi
console.log(Object.values(tinderUser));  //values ka array
console.log(Object.entries(tinderUser));  //array k andr array bna k de dega

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //check krta h ki vo property exist krti h ya nhi


//de-structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh bhai"
}
// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);
