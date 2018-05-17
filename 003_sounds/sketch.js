var ctracker;
var mySound;
var canplay = true;

function setup() {
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    videoInput.hide();
    videoInput.id("v");
    var mv = document.getElementById("v");
    mv.muted = true;
        
    // setup canvas
    var cnv = createCanvas(400, 300);
    cnv.position(0, 0);
    
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);
    noStroke();

    // setup sound
    mySound = loadSound("sz.wav");
}
      
function draw() {
    clear();
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    
    if(positions.length > 0) {
        fill(200);
        rect(0,0,width,height);
        
        if(canplay) {
            mySound.play();
        }
        canplay = false;
    } else {
        canplay = true;
    }
    
}