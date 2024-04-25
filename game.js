const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


// Constructor to make images drawn on canvas clickable shapes
class canvasImage {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    isPointInside(pointX, pointY) {
        return (
            pointX >= this.x &&
            pointX <= this.x + this.width &&
            pointY >= this.y &&
            pointY <+ this.y + this.height
        );
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


// Load images and assign to variables
const background = new Image;
background.src = './pet_images/pet_game_background.png';

const cat1 = new Image;
cat1.src = './pet_images/cat1_image.png';

const cat2 = new Image;
cat2.src = './pet_images/cat2_image.png';

const dog1 = new Image;
dog1.src = './pet_images/dog1_image.png';

const dog2 = new Image;
dog2.src = './pet_images/dog2_image.png';

const heart = new Image;
heart.src = './pet_images/heart_image.png';


// Initialize image shapes
let cat1Shape = new canvasImage();
let cat2Shape = new canvasImage();
let dog1Shape = new canvasImage();
let dog2Shape = new canvasImage();


// Initialize canvas width and height and image scales
canvas.width = window.innerWidth * 0.71;
canvas.height = window.innerHeight * 0.81;
let backgroundScalefactor = Math.max(canvas.width / background.width, canvas.height / background.height);
let petScalefactor = backgroundScalefactor * 0.71;


// After window is loaded, set up the canvas
window.onload = function() {
    setScreen();
}


// Set up the canvas based on the window size and draw images
function setScreen() {
    if (window.innerWidth > 1256) {
        canvas.width = window.innerWidth * 0.71;
        canvas.height = window.innerHeight * 0.96;
    }
    else if (window.innerWidth < 894) {
        canvas.width = window.innerWidth * 0.71;
        canvas.height = window.innerHeight * 0.68;
    }
    else {
        canvas.width = window.innerWidth * 0.71;
        canvas.height = window.innerHeight * 0.81;
    }
    backgroundScalefactor = Math.max(canvas.width / background.width, canvas.height / background.height);
    petScalefactor = backgroundScalefactor * 0.71;
    drawBackground(backgroundScalefactor);
    drawPets(petScalefactor);
}


// re-set up canvas if window is resized
window.addEventListener('resize', setScreen);


// If image shape is clicked, draw heart
canvas.addEventListener('click', function(event) {
    let x = event.offsetX;
    let y = event.offsetY;

    if (cat1Shape.isPointInside(x, y)) {
        drawHeart(cat1Shape.x, cat1Shape.y);
    }
    if (cat2Shape.isPointInside(x, y)) {
        drawHeart(cat2Shape.x, cat2Shape.y);
    }
    if (dog1Shape.isPointInside(x, y)) {
        drawHeart(dog1Shape.x, dog1Shape.y);
    }
    if (dog2Shape.isPointInside(x, y)) {
        drawHeart(dog2Shape.x, dog2Shape.y);
    }
});


// Draw background based on canvas size
function drawBackground(scalefactor) {
    let newwidth = background.width * scalefactor;
    let newheight = background.height * scalefactor;

    let x = (canvas.width / 2) - (newwidth / 2);
    let y = (canvas.height / 2) - (newheight / 2);
    ctx.drawImage(background, x, y, newwidth, newheight);
}


// Draw pets based on localstorage
function drawPets(scalefactor) {
    let pets = JSON.parse(localStorage.getItem("LocalPets"));
    if (pets !=== null) {
        for (let pet = 0; pet < pets.length; pet++) {
            let petImage = pets[pet].image;
    
            if (petImage === 'cat1')
                drawCat1(scalefactor);
    
            else if (petImage === 'cat2')
                drawCat2(scalefactor);
    
            else if (petImage === 'dog1')
                drawDog1(scalefactor);
    
            else if (petImage === 'dog2')
                drawDog2(scalefactor);
        }
    }
}


// Functions to draw each pet
function drawCat1(scalefactor) {
    let newwidth = cat1.width * scalefactor;
    let newheight = cat1.height * scalefactor;

    let x = (canvas.width / 3.5) - (newwidth / 3.5);
    let y = (canvas.height / 1.25) - (newheight / 1.25);
    cat1Shape = new canvasImage(cat1, x, y, newwidth, newheight);
    cat1Shape.draw(ctx);
}

function drawCat2(scalefactor) {
    let newwidth = cat2.width * scalefactor;
    let newheight = cat2.height * scalefactor;

    let x = (canvas.width / 2.3) - (newwidth / 2.3);
    let y = (canvas.height / 2) - (newheight / 2);
    cat2Shape = new canvasImage(cat2, x, y, newwidth, newheight);
    cat2Shape.draw(ctx);
}

function drawDog1(scalefactor) {
    let newwidth = dog1.width * scalefactor;
    let newheight = dog1.height * scalefactor;

    let x = (canvas.width / 1.9) - (newwidth / 1.9);
    let y = (canvas.height / 1.4) - (newheight / 1.4);
    dog1Shape = new canvasImage(dog1, x, y, newwidth, newheight);
    dog1Shape.draw(ctx);
}

function drawDog2(scalefactor) {
    let newwidth = dog2.width * scalefactor;
    let newheight = dog2.height * scalefactor;

    let x = (canvas.width / 1.35) - (newwidth / 1.35);
    let y = (canvas.height / 1.35) - (newheight / 1.35);
    dog2Shape = new canvasImage(dog2, x, y, newwidth, newheight);
    dog2Shape.draw(ctx);
}


// Function to draw heart based on pet location
function drawHeart(petX, petY) {
    let newwidth = heart.width * petScalefactor;
    let newheight = heart.height * petScalefactor;
    let x = petX - (newwidth/2);
    let y = petY - (newheight/2);
    ctx.drawImage(heart, x, y, newwidth, newheight);
    setTimeout(function() {
        drawBackground(backgroundScalefactor);
        drawPets(petScalefactor);
    }, 900);
}

