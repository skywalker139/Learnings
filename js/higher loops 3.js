const coding=['js', 'cpp', 'rb', 'java', 'py']

// coding.forEach( function (val) {
//     console.log(val);
// } )

coding.forEach( (val) => {
    console.log(val);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
//coding.forEach(printMe()) nhi krna h, refrence bs dena h func ka call nhi krna h

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})