var mySound;
var canplay = true;

function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400, 300);
    
    // load a sound
    mySound = loadSound("sz.wav");
}
      
function draw() {
    getPositions();
    
    clear();
    
    noStroke();
    fill(0,180);
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
