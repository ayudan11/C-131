function preload(){
    img=loadImage('image.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420)
    fill("#FF7F50");
    text("Human",45,75);
    noFill();
    stroke("#FF7F50");
    rect(30,60,300,340);
}