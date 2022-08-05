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

// 3.3 Events & 3.4 Events part Two & 3.5 More Events 
/* const h1 = document.querySelector("div:first-child h1");

// const h1 = document.querySelector("div h1");

console.dir(h1);

/* function handleTitleClick() {
    // console.log("title was clicked!");
    h1.style.color = "blue";
} 

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
} 

// h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
h1.addEventListener("contextmenu", superEventHandler.handlecontextmenu);
window.addEventListener("resize", superEventHandler.handleWindowResize); */
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);

// .removeEventLister

/* console.dir(title);

title.style.color = "blue"; */

// title.innerText = "hello";

// 3.4 Events part Two
// searching 'h1 html element mdn'

// Day 4 : assignmnet my answer
/* import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("div:first-child h2");

console.dir(h2);

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "Mouse is here!";
    h2.style.colors = "#1abc9c";
  },

  handleMouseLeave: function () {
    h2.innerText = "Mouse is gone!";
    h2.style.color = "#3498db";
  },

  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    // document.body.style.backgroundColor = "tomato";
    h2.style.color = "#9b59b6";
  },

  handlecontextmenu: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = "#f39c12";
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
h2.addEventListener("contextmenu", superEventHandler.handlecontextmenu);
window.addEventListener("resize", superEventHandler.handleWindowResize); */

// Day 4 : assignmnet answer
const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext); 

// 3.6 CSS in Javascript
const h1 = document.querySelector("div:first-child h1");

/* function handleTitleClick() {
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);  

    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
} */
    
// 3.7 CSS in Javascipt part Two
/* function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass); // clicked -> classname
    }
} */

/* function handleTitleClick() {
    h1.classList.toggle("clicked");
} 

h1.addEventListener("click", handleTitleClick); */

// STEP 1. find the element
// STEP 2. listen for an event
// STEP 3. react to the event

// 1400, 1000, 600 
function handleBackgroundResize() {
    const width = window.innerWidth;
    if (width >= 1400) {
        window.getComputedStyle(document.querySelector('g'));
    } else if (1000 < width < 1400) {
        window.getComputedStyle(document.querySelector('b'));
    } else {
        window.getComputedStyle(document.querySelector('p'));
    }
}

window.addEventListener("resize", handleBackgroundResize);
