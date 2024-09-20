//array

const myArr = [1,2,3,4,5,6,7]

const myArr2= new Array(1,2,3,4)
console.log(myArr[3]);

//array methods

myArr.push(9);
const size=myArr.length;
console.log(`the size  of the array is ${size}`);

console.log(myArr);
myArr.pop()
console.log(myArr);
1
myArr.unshift(69); //inserts 69 at the starting

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()

console.log(myArr); //same chiz print krega but bs type change ho ghay h data ka
console.log(typeof newArr);

//slice and splice
console.log ( "A ", myArr);

const myn1 = myArr.slice(1,3); //original array remains unchanged

console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1,3); //same output but original array bhi change ho jayega

console.log(myn1);
console.log("C ", myArr);