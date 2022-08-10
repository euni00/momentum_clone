// 4.0 Input values & 4.1 From Submission
/* const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    // console.log("hello", loginInput.value);
    // console.log("click!!");

    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } 

    console.log(username);
} 

loginButton.addEventListener("click", onLoginBtnClick) */

// 4.2 Events & 4.3 Events part Two & 4.4 Getting Username
/* nconst loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // const username = loginInput.ariaValueMax;
    // console.log(username);
    event.preventDefault(); // prventing that default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = "Hello " + username + "Keep going";
    // => greeting.ineerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(username); 
    // console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("Clicked!")
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);  */

// 4.5 Saving Username
/* const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // prventing that default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.ineerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); */

//4.6 Loading Username
/* const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // prventing that default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeing.ineerText = `Hello ${username}`; 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
} */

// 4.7 Super Recap
/* const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // prventing that default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings(username) {
    greeting.ineerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();
} */

// Assignment
/* const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // prventing that default behavior
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeing.ineerText = `Hello ${username}`; 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
} */

// Assignment
const numberForm = document.querySelector("#number-form");
const numberInput = document.querySelector("#number-form input");
const presentWinLose = document.querySelector("#presentWinLose");

const USERMAXNUMBER_KEY = "maxnumber";

function numberSubmit(event) {
    event.preventDefault(); // prventing that default behavior
    localStorage.setItem(maxnumber, numberInput.value);
    paintWinLose();
}

function paintWin() {
    presentWinLose.innerText = "You Win"; 
    presentWinLose.classList.remove(USERMAXNUMBER_KEY);
}

function paintLose() {
    presentWinLose.innerText = "You Lose"; 
    presentWinLose.classList.remove(USERMAXNUMBER_KEY);
}

function allChoose() {
    presentWinLose.innerText = `You chose: ${savedUserNumber}`; 
    presentWinLose.innerText = `the machine chose: ${randomMachineNumber}`; 
}

const savedUserNumber = localStorage.Math.ceil(number);
const randomMachineNumber = localStorage.Math.random(maxnumber);

console.log(savedUserNumber);
console.log(randomMachineNumber);

if (savedUserNumber === randomMachineNumber) {
    // show the user win
    allChoose();
    paintWin();
} else {
    // show the loser win
    allChoose();
    paintLose();
} 
