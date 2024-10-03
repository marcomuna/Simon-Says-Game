
let level = 0;
let start = false;

let game = [];
let user = [];

let btn = document.querySelector("button");

// ?starting the game using keypress or start button click 

function gameStart() {
    if (start == false) {
        console.log("Game Started");

        level++;
        document.querySelector("h2").innerText = `Level ${level}`;
        start === true;

    }
    flash();
}

    if (start == false) {
        btn.addEventListener("click", () => gameStart());
        document.addEventListener("keypress", () => gameStart());
    } else {
        console.log("game is already started.");
        
    }

// ? function for flashing the color box in the game starts 


function flash() {
    let random = Math.floor(Math.random() * 4);
    let colorarr = ["red", "green", "blue", "orange"];
    let color = document.querySelector(`#${colorarr[random]}`);

    game.push(color.id);
    console.log(game);

    color.style.backgroundColor = "white";
    setTimeout(() => {
        color.style.backgroundColor = `${colorarr[random]}`;
    }, 50);
}

// ?user click addEventListener in the color box 

let red = document.querySelector("#red");
// let green = document.querySelector("#green");
// let blue = document.querySelector("#blue");
// let orange = document.querySelector("#orange");

// this.addEventListener("click", () => {
//     console.log("red colorbox", this);

// })

// function userClick() {
// }