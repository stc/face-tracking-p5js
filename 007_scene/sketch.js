var myImage;
var headpos;

function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,300);
    
    // load an image
    myGif = loadImage("orccatgif.gif");
}
      
function draw() {
    getPositions();
    
    background(179, 224, 255);
    
    
    if(positions.length > 0) {
        headpos = width/2 - positions[37][0];
    } else {
        headpos = 0;
    }
    
    imageMode(CENTER);
    image(myGif,width/2,height/2);
    
    noStroke();
    fill(77, 184, 255);
    rect(-headpos * 2 + width/4,0,width/2,height);
    
}