var myImage;
var headpos;

function setup() {
    loadCamera();
    loadTracker();
    
    // setup canvas
    var cnv = createCanvas(400, 300);
    cnv.position(0, 0);
    
    // setup sound
    myGif = loadImage("orccatgif.gif");
}
      
function draw() {
    background(179, 224, 255);
    
    getPositions();
    
    if(positions.length > 0) {
        headpos = width/2 - positions[37][0];
    } else {
        headpos = 0;
    }
    
    imageMode(CENTER,CENTER);
    image(myGif,width/2,height/2);
    
    noStroke();
    fill(77, 184, 255);
    rect(-headpos * 2 + width/4,0,width/2,height);
    
}