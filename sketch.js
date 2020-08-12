let img;
let xPos = 178;
let yPos = 95;
let homeXPos = 178;
let homeYPos = 91;
let officeXPos = 1589;
let officeYPos = 110;
let storeXPos = 1557;
let storeYPos = 410;
let bankXPos = 142;
let bankYPos = 403;
let pizzaXPos = 986;
let pizzaYPos = 388;
let speed = 5;
let state = 1;
let money = 100;
let storeEvent = 1;
let cnv;
let centerX = 850;
let centerY = 350;


function preload(){
    img = loadImage("images/background.jpg");
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }

function setup(){
 cnv = createCanvas(1700,700);
 centerCanvas();
}

function draw(){

    if(state === 1){
        
        let start = document.querySelector("h3");
        let canvas = document.querySelector("canvas");
        let startDiv = document.getElementById("play");
        canvas.style.display = "none";
        
       start.onclick = function(){
        console.log('20px');
        state = 2;
        startDiv.style.display = "none";
        canvas.style.display = "block";
       }
       
    } 
    
    else if (state === 2){
      
        let rng = random(10);
        let r = random(255);
        let g = random(255);
        let b = random(255);
 
        rectMode(RADIUS);
        ellipseMode(CENTER);
        image(img, 0, 0, 1700, 700);
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
        if(xPos < homeXPos - 30 || yPos < homeYPos - 30 || xPos > homeXPos + 40 || yPos > homeYPos + 30 ){
            text("There's an attempt a break in attempt at your house!", 850, 700);
            fill(r, g, b);
            square(homeXPos, homeYPos, 50);
            console.log("player is home")
        }
        else if(xPos < officeXPos - 30 || yPos < officeYPos - 30 || xPos > officeXPos + 40 || yPos > officeYPos + 30){
            text("It's a hostage  situation at the office", 850, 700);
            fill(r, g, b);
            circle(officeXPos, officeYPos, 20);;   
            console.log('player is at the office');         
        }
        else if((xPos < storeXPos - 30 || yPos < storeYPos - 30 || xPos > storeXPos + 40 || yPos > storeYPos + 30) && storeEvent == 1){
            text("Stick em up! It's a robbery!", 850, 700);
            fill(r, g, b);
            ellipse(storeXPos, storeYPos, 40, 20);
            console.log('player is at the stor');
            
        }
        else if(xPos < bankXPos - 30 || yPos < bankYPos - 30 || xPos > bankXPos + 40 || yPos > bankYPos + 30){
            text("Bonnie and Clyde are back at it again!", 850, 700);
            fill(r, g, b);
            square(bankXPos, bankYPos, 35);
            console.log('player is at the bank');
        }
        else if((xPos < storeXPos - 30 || yPos < storeYPos - 30 || xPos > storeXPos + 40 || yPos > storeYPos + 30) && storeEvent == 2){
            text("Gotta buy some groceries", 850, 700);           
            fill(r, g, b);
            ellipse(storeXPos, storeXPos, 10, 30);
            console.log('player is at the store');
        }
        else if(xPos < pizzaXPos - 30 || yPos < pizzaYPos - 30 || xPos > pizzaXPos + 40 || yPos > pizzaYPos + 30){
            text("It's a special offer at the pizzaria", 850, 700);
            fill(r, g, b);
            ellipse(pizzaXPos, pizzaYPos);
            console.log('player is at the pizza shop');
        }
    
    
      function menuStorePopup() {
        fill(255);
        rect(centerX, centerY, 200, 300);
        fill(0,255,0)
        fill(0);
        text('Buy For $50', centerX - 180, centerY);
        textSize(65);


        }
        
        menuStorePopup();
 }
}
