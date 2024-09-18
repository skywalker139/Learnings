//date

//let myDate = new Date()

// console.log(myDate.toString());
// console.table([myDate.toDateString(), myDate.toISOString(), myDate.toJSON(), myDate.toLocaleDateString(), myDate.toLocaleString(), myDate.toLocaleTimeString(), myDate.toTimeString()]);

// console.log(myDate.toLocaleString()); //best
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23, 5, 9)
// myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// Date.now() --> isse aj tk kitne miliseconds guzre h vo milenge
// myCreatedDate.getTime()   --> same kaam krta h

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    //timeZone: ""
})

//