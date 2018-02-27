const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");


gray.addEventListener("click", (event) =>{
    gray.style.order = "1";
    red.style.order = "5";
    pink.style.order = "4";
    green.style.order = "3";
    blue.style.order = "2";
});

pink.addEventListener("click", (event) =>{
    gray.style.order = "4";
    red.style.order = "5";
    pink.style.order = "1";
    green.style.order = "3";
    blue.style.order = "2";
});

green.addEventListener("click", (event) =>{
    gray.style.order = "3";
    red.style.order = "5";
    pink.style.order = "4";
    green.style.order = "1";
    blue.style.order = "2";
});

pink.addEventListener("click", (event) =>{
    gray.style.order = "4";
    red.style.order = "5";
    pink.style.order = "1";
    green.style.order = "3";
    blue.style.order = "2";
});

red.addEventListener("click", (event) =>{
    gray.style.order = "5";
    red.style.order = "1";
    pink.style.order = "4";
    green.style.order = "3";
    blue.style.order = "2";
});
blue.addEventListener("click", (event) =>{
    gray.style.order = "5";
    red.style.order = "2";
    pink.style.order = "4";
    green.style.order = "3";
    blue.style.order = "1";
});