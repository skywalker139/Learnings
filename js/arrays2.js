const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes);  //arrary k anndr array push ho jayega

const allHeros = marvel_heros.concat(dc_heros); //isse judd jayega and returns a new array
//console.log(allHeros);

const all_new_heros =[ ...marvel_heros , ...dc_heros]; //... lagane se spread ho jata h, mtlb elements array se bahar aake spread ho jaate h

//console.log(all_new_heros);

const another_array = [1 ,2 ,3 , [4 ,5 ,6], 7 , [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)  //saare sub arrays ko ek me merge kr dega

//console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  //false as it is not an array
console.log(Array.from("Hitesh"))  //['h' , 'i' etc]

console.log(Array.from({name:'hitesh'}))   //empty array because direct convert nhi kr payega, iski batana padega ki keys ka array banao

let score1=100; let score2=200; let score3=300;
console.log(Array.of(scorel, score2, score3));  //array bna k de dega

