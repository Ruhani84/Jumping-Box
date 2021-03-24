var canvas;
var music;
var bluebox;
var greenbox;
var orangebox;
var pinkbox;
var box; 
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
    bluebox = createSprite(50,600,150,50);
    bluebox.shapeColor="blue";

    greenbox = createSprite(220,600,150,50);
    greenbox.shapeColor="green";

    orangebox = createSprite(390,600,150,50);
    orangebox.shapeColor="orange";

    pinkbox = createSprite(580,600,150,50);
    pinkbox.shapeColor="pink";

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=3;
    box.scale=0.2;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites(); 
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
if (bluebox.isTouching(box) && box.bounceOff(bluebox)){
     box.shapeColor="blue";
     music.play();
}
if (greenbox.isTouching(box) && box.bounceOff(greenbox)){
    box.shapeColor="green";
    music.play();
}
if (orangebox.isTouching(box) && box.bounceOff(orangebox)){
    box.shapeColor="orange";
    box.shapeColor = "orange";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}
if (pinkbox.isTouching(box) && box.bounceOff(pinkbox)){
    box.shapeColor="pink";
    music.play();
}


    drawSprites();
}
