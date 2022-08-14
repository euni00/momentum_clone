// 5.0 Intervals
/* const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("Hello");
}

setInterval(sayHello, 5000); */

// 5.1 Timeouts and Dates
/* const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// sayHello();
getClock();  // 10:23:0 -> 10:23:00
setInterval(getClock, 1000); */

// 5.2 PadStart
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// sayHello();
getClock();  // 10:23:0 -> 10:23:00
setInterval(getClock, 1000);

// 5.3 Recap

// Assignment
/* const remainTime = document.querySelector("#remain-time");

function dDayClock() {
    const anniversaryDate = new Date("2022-12-25")
    const date = new Date();

    const dDay = anniversaryDate - date;

    const dDayDay = Math.floor(dDay / (1000 * 60 * 60 * 24));
    const dDayhours = Math.floor((dDay / (1000*60*60)) % 24)
    const dDayminutes = Math.floor((dDay / (1000 * 60)) % 60);
    const dDayseconds = Math.floor(dDay / 1000 % 60);
    remainTime.innerText = `${dDayDay} day ${dDayhours} hour ${dDayminutes} minute ${dDayseconds} second`;
}

// sayHello();
dDayClock();  // 10:23:0 -> 10:23:00
setInterval(dDayClock, 1000); */
