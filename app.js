const a = 10; 
const b = 2;
let myName = "yeeunlee";
const veryLongVariableName = 0; 

/* let a = 10; 
let b = 2;
let myName = "yeeunlee"; */

console.log("lalalala");
console.log('lalalala');

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Amy";
// let -> creation

const amIFat = null;   
let something;
// console.log(something, amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
console.log(daysOfWeek);

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sun");

const nonsense = [1, 2, "hello", false, null, true, undefined, "yeeunlee"];
console.log(daysOfWeek, nonsense);

const apple = "apple";
const potato = "potato";
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy[0]);

/* const playerName = "yeeunlee";
const playerPoints = 100;
const playerHandsome = true;
const playerFat = "little bit"; */

/* player.name
player.points
player.handsome */

// player[0] == name
// player[1] == points
// const player = ["yeeunlee", 1212, false, "little bit"];

const player = {
    name: "yeeunlee",
    points: 10,
    fat: true,
};

console.log(player);
player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);

console.log(player.name);
console.log(player["name"]);
// player.name

// Functions part One
function sayHello() {

}
