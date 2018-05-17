var ctracker;

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
}
      
function draw() {
    background(0);
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    
    textSize(20);
    textAlign(CENTER,CENTER);
    
    if(positions.length > 0) {
        // face is present
        fill(100,225,220);
        text("YOU ARE BEAUTIFUL", width/2, height/2);
    } else {
        fill(255);
        text("NOBODY IS WATCHING YOU", width/2, height/2);
    }
}