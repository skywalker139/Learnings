const arr =[1,2,3,4,5]

//for (const iterator of object){}
// object can be any object: array list, etc

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
   // console.log(`Each character is ${greet}`); 
}

// _______ MAPS ________

const map = new Map() // key value pair
map.set('IN', 'India')
map.set('IN', 'India') // duplicate key not allowed unique hi lega
map.set('US', 'United States')
map.set('UK', 'United Kingdom')

console.log(map);

for (const key of map){
    // aise aray me saare key values print ho jayenge
    }

for (const [key, value] of map) {
    console.log(`Key is ${key} and value is ${value}`);
}
