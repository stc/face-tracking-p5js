var mySound;
var canplay = true;

function setup() {
    loadCamera();
    loadTracker();
    
    // setup canvas
    var canvas = createCanvas(400, 300);
    canvas.position(0,0);
    
    // setup sound
    mySound = loadSound("sz.wav");
}
      
function draw() {
    clear();
    getPositions();
    fill(0);
    rect(0,0,width,height);
    if(positions.length > 0) {
        if(canplay) {
            mySound.play();
        }
        canplay = false;
    } else {
        canplay = true;
    }    
}
