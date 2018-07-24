var myImage;

function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,300);
    
    // load an image
    myImage = loadImage("mask.png");
}
      
function draw() {
    getPositions();
    clear();
    drawMask();
}

function drawMask() {
    if(positions.length > 0) {
        var p1 = createVector(positions[7][0], positions[7][1] );
        var p2 = createVector(positions[33][0], positions[33][1] );
        
        stroke(255,0,0);
        line(p1.x,p1.y,p2.x, p2.y);
        
        // angle in radians
        var angleRad = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        
        translate(positions[37][0], positions[37][1]); 
        rotate(angleRad + PI/2);
        imageMode(CENTER,CENTER);

        var mSize = p1.dist(p2);
        image(myImage, 0, 0, mSize * 2.5, mSize * 2.5);
    }
}