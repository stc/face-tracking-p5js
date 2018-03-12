var ctracker;

function setup() {
    createCanvas(600,400);  
    
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    videoInput.id("v");
    var mv = document.getElementById("v");
    mv.muted = true;
    mv.hidden = true;
    
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);
}
      
function draw() {
    var positions = ctracker.getCurrentPosition();
}