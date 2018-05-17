var ctracker;
var myImage;
var headpos;

function setup() {
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
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
    myGif = loadGif("orccatgif.gif");
}
      
function draw() {
    background(179, 224, 255);
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    if(positions.length > 0) {
        headpos = width/2 - positions[37][0];
    } else {
        headpos = 0;
    }
    
    imageMode(CENTER,CENTER);
    image(myGif,width/2,height/2);
    
    fill(77, 184, 255);
    rect(-headpos * 2 + width/4,0,width/2,height);
    
}