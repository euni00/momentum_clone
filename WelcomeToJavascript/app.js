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

// 2.7 Functions part One
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}


console.log("hello");
sayHello("yeeunlee",23);

// 2.8 Functions part Two
function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
// console.log(firstNumber); -> Uncaught ReferenceError: firstNumber is not defined

function divide(a, b) {
    console.log(a / b);
}

// plus(); NaN -> Not a Number
plus(8, 60);
divide(98, 20);

const player2 = {
    name: "yeeunlee",
    sayHello: function (otherPersonName) {
        console.log("Hello!" + otherPersonName + " nice to meet you!");
    },
}; 

console.log(player.name);
player2.sayHello('yeeunlee');

// 2.9 Recap 
const a2 = 5;
let isNicoFat = true;

isNicoFat = false;
console.log(a);

const a3 = true;  // boolean
const b2 = null; // empty
let hello;
console.log(hello);  //undefined 
const me = "sexy";
const days = [1, 2, false, true, null, undefined, "text", me];

const toBuy2 = ["potato", "tomato", "pizza"];
console.log(toBuy2[2]);
toBuy2[2] = "water";
console.log(toBuy2[2]);
toBuy2.push("meat");
console.log(toBuy2);

// 2.10 Recap 2
const days2 = ["mon", "tue", "wed"];
const player3 = {
    name: "yeeunlee",
    age: 23,
};

// console.log(player3, console);
console.log(player3);
player3.name = "Amy";
console.log(player3);
player3.sexy = "soon";
console.log(player3);

function plus(potato, salad) {
    console.log(potato + salad);
}

function minusFive(potato) {
    console.log(potato - 5);
}

// alert("lalalalaa");
minusFive(10);
plus(5, 10);
plus(1.234, 9898);
plus(9898, 1.234);

const calculator = {
    add: function (a, b) {
        // console.log(a + b);
        console.log("hello");
        return a + b;  // finish function 
        console.log("bye bye"); // execute X
    },
    minus: function (a, b) {
        // console.log(a - b);
        return  a - b;
    },
    div: function (a, b) {
        // console.log(a / b);
        return  a / b;
    },
    powerOf: function (a, b) {
        // console.log(a ** b);
        return  a ** b;
    },
};


console.log(calculator.add(5, 1));
console.log(calculator.minus(5, 1));
console.log(calculator.div(5, 1));
console.log(calculator.powerOf(5, 1));

// 2.11 Returns & 2.12 Recap
const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.div(minusResult, plusResult);
const powerResult = calculator.powerOf(divideResult, minusResult);

const age = 23;
function calculateKrAge(ageOfForeigner) {
    ageOfForeigner + 2;
    return "hello";
}

const krAge = calculateKrAge(age);

console.log(krAge);

// 2.13 Conditionals
const age2 = parseInt(prompt("How old are you?"));

console.log(isNaN());
console.log(age2);
//console.log(age2, parseInt("age2"));
// console.log(typeof "15", typeof parseInt("15"));

// true || true === true
// false || true === true
// true || false === true
// false || fasle === false

// true && true === true
// false && true === false
// true && false === false
// false && false === false

// 2.14 Conditionals par Two && 2.15 Conditionals part Three
// 2.16 Recap
if (isNaN(age2) || age < 0) { // condition
    // condition === true
    console.log("Please write a  real positive number");
} else if (age2 < 18) {
    console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50) {
    console.log("You can drink");
} else if (age2 > 50 && age2 <= 80) {
    console.log("You should exercise");
} else if (age2 > 80) {
    // condition === false
    console.log("You can do whatever you want.");
} else if (age2  !== 100) {
    console.log("wow you are wise");
}

// 3.0 The Document Object


