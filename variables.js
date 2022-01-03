// objects
let cubeMap = document.querySelector(".cubic-partition");



let createButton = document.querySelector('.create-button')

let red_C_button = document.querySelector(".red_C_button")
let red_aC_button = document.querySelector(".red_aC_button")
let blue_C_button = document.querySelector(".blue_C_button")
let blue_aC_button = document.querySelector(".blue_aC_button")
let orange_C_button = document.querySelector(".orange_C_button")
let orange_aC_button = document.querySelector(".orange_aC_button")
let green_C_button = document.querySelector(".green_C_button")
let green_aC_button = document.querySelector(".green_aC_button")
let white_C_button = document.querySelector(".white_C_button")
let white_aC_button = document.querySelector(".white_aC_button")
let yellow_C_button = document.querySelector(".yellow_C_button")
let yellow_aC_button = document.querySelector(".yellow_aC_button")



let cube = [["r", "r", "r", "r", "r", "r", "r", "r", "r"],
            ["w", "w", "w", "w", "w", "w", "w", "w", "w"],
            ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
            ["g", "g", "g", "g", "g", "g", "g", "g", "g"],  
            ["o", "o", "o", "o", "o", "o", "o", "o", "o"],    
            ["y", "y", "y", "y", "y", "y", "y", "y", "y"]] 
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");
let r5 = document.getElementById("r5");
let r6 = document.getElementById("r6");
let r7 = document.getElementById("r7");
let r8 = document.getElementById("r8");
let r9 = document.getElementById("r9");


let w1 = document.getElementById("w1");
let w2 = document.getElementById("w2");
let w3 = document.getElementById("w3");
let w4 = document.getElementById("w4");
let w5 = document.getElementById("w5");
let w6 = document.getElementById("w6");
let w7 = document.getElementById("w7");
let w8 = document.getElementById("w8");
let w9 = document.getElementById("w9");

let g1 = document.getElementById("g1");
let g2 = document.getElementById("g2");
let g3 = document.getElementById("g3");
let g4 = document.getElementById("g4");
let g5 = document.getElementById("g5");
let g6 = document.getElementById("g6");
let g7 = document.getElementById("g7");
let g8 = document.getElementById("g8");
let g9 = document.getElementById("g9");


let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");


let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");
let o5 = document.getElementById("o5");
let o6 = document.getElementById("o6");
let o7 = document.getElementById("o7");
let o8 = document.getElementById("o8");
let o9 = document.getElementById("o9");



let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");
let y4 = document.getElementById("y4");
let y5 = document.getElementById("y5");
let y6 = document.getElementById("y6");
let y7 = document.getElementById("y7");
let y8 = document.getElementById("y8");
let y9 = document.getElementById("y9");

let cubeObject = [[r1, r2, r3, r4, r5, r6, r7, r8, r9],
                    [w1, w2, w3, w4, w5, w6, w7, w8, w9],
                    [b1, b2, b3, b4, b5, b6, b7, b8, b9],
                    [g1, g2, g3, g4, g5, g6, g7, g8, g9],
                    [o1, o2, o3, o4, o5, o6, o7, o8, o9],
                    [y1, y2, y3, y4, y5, y6, y7, y8, y9]]

// colorts

let white = "#ffffff";
let red = "#ff0000";
let blue = "#0000ff"
let orange = "#ffa500";
let green = "#008000";
let yellow = "#ffff00"


let redRGB = "rgb(255, 0, 0)"
let greenRGB = "rgb(0, 128, 0)"
let whiteRGB = "rgb(255, 255, 255)"
let blueRGB = "rgb(0, 0, 255)"
let orangeRGB = "rgb(255, 165, 0)"
let yellowRGB = "rgb(255, 255, 0)"

let sides = {
    red: 0,
    white: 1,
    blue: 2,
    green: 3,
    orange: 4,
    yellow: 5
}