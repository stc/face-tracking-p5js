var ctracker;
var eyeImage, noseImage, mouthImage;

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

    eyeImage = loadImage("eye.png");
    noseImage = loadImage("nose.png");
    mouthImage = loadImage("mouth.png");
}
      
function draw() {
    clear();
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();
    
    if(positions.length > 0) {
        var p1 = createVector(positions[7][0], positions[7][1] );
        var p2 = createVector(positions[33][0], positions[33][1] );
        
        var eye1pos = createVector(positions[27][0],positions[27][1]);
        var eye2pos = createVector(positions[32][0],positions[32][1]);
        var nosepos = createVector(positions[41][0],positions[41][1]);
        var mouthpos = createVector(positions[57][0],positions[57][1]);    
        
        stroke(255,0,0);
        line(p1.x,p1.y,p2.x, p2.y);
        
        noFill();
        
        stroke(0,255,0);
        ellipse(eye1pos.x,eye1pos.y,10,10);
        ellipse(eye2pos.x, eye2pos.y,10,10);
        
        stroke(0,0,255);
        ellipse(nosepos.x, nosepos.y,5,5);
        ellipse(mouthpos.x, mouthpos.y,5,5);
        
        // angle in radians
        var angleRad = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        var mSize = p1.dist(p2);
        
        imageMode(CENTER,CENTER);
        
        push();
        translate(eye1pos.x,eye1pos.y); 
        rotate(angleRad + PI/2);
        image(eyeImage,0,0,mSize/2,mSize/2);
        pop();
        
        push();
        translate(eye2pos.x,eye2pos.y); 
        rotate(angleRad + PI/2);
        image(eyeImage,0,0,mSize/2,mSize/2);
        pop();
        
        push();
        translate(mouthpos.x,mouthpos.y); 
        rotate(angleRad + PI/2);
        image(mouthImage,0,0,mSize,mSize);
        pop();
        
        push();
        translate(nosepos.x,nosepos.y+10); 
        rotate(angleRad + PI/2);
        image(noseImage,0,0,mSize,mSize);
        pop();

        
        //image(myImage, 0, 0, mSize * 2.5, mSize * 2.5);
    }
}