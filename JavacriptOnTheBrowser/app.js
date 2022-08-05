// 3.1 HTML in Javascript
// document.title = "Hello! From JS!";
/* const title = document.getElementById("something");

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className); */

// 3.2 Searching For Elements
// const hellos = document.getElementsByClassName("Hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");
/* const title = document.querySelector("div h1"); //.hello h1

const title2 = document.querySelectorAll("div h1"); //.hello h1

console.log(title);
console.log(title2); */

// 3.3 Events & 3.4 Events part Two & More Events 
const h1 = document.querySelector("div:first-child h1");

// const h1 = document.querySelector("div h1");

console.dir(h1);

/* function handleTitleClick() {
    // console.log("title was clicked!");
    h1.style.color = "blue";
} */

const superEventHandler = {

handleMouseEnter: function () {
    h1.innerText = "Mouse is here!";
    h1.style.color = "green";
},

handleMouseLeave: function () {
    h1.innerText = "Mouse is gone!";
    h1.style.color = "blue";
},

handleWindowResize: function () {
    h1.innerText = "You just resized!"
    // document.body.style.backgroundColor = "tomato";
    h1.style.color = "purple";
},

handlecontextmenu: function () {
    h1.innerText = "That was a right click!";
    h1.style.color = "red";
},
};

/* function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffLine() { 
    alert("SOS no WIFI");
}
function handleWindowOnLine() {
    alert("ALL GOOOD");
} */

// h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
h1.addEventListener("contextmenu", superEventHandler.handlecontextmenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);

// .removeEventLister

/* console.dir(title);

title.style.color = "blue"; */

// title.innerText = "hello";

// 3.4 Events part Two
// searching 'h1 html element mdn'

//3.5 More Events
