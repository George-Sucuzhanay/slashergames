let img;
let xPos = 290;
let yPos = 410;
let homePos;
let officePos;
let storePos;
let bankPos;

function preload(){
    img = loadImage("images/background.jpg");
}

function setup(){
    createCanvas(800,800);
    //Set background for Game
    // image(img, 0, 0, 700, 700);
}

function draw(){
    image(img, 0, 0, 700, 700);
    //Player char is a red dot
    fill(255, 0, 0);
    noStroke();
    circle(xPos, yPos, 25);
    //Update position using keyboard buttons
    if(keyIsDown(87)){
        yPos--;
    }
    if(keyIsDown(83)){
        yPos++;
    }
    if(keyIsDown(65)){
        xPos--;
    }
    if(keyIsDown(68)){
        xPos++;
    }
    //Add random events in map, smthn  to be done after above

}