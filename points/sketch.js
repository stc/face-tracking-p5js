var ctracker;
function setup() {
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    videoInput.id("v");
    videoInput.hide();
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
    background(60);
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
        
    for (var i=0; i<positions.length -3; i++) {
        // set the color of the ellipse based on position on screen
        fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
        // draw ellipse
        ellipse(width - positions[i][0], positions[i][1], 8, 8);
    }
}