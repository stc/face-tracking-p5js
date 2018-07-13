function setup() {
    loadCamera();
    loadTracker();
    
    // setup canvas
    var canvas = createCanvas(400, 300);
    canvas.position(0,0);
}
      
function draw() {
    background(0);
    textSize(20);
    textAlign(CENTER,CENTER);
    
    getPositions();
    
    if(positions.length > 0) {
        // face is present
        fill(100,225,220);
        text("YOU ARE BEAUTIFUL", width/2, height/2);
    } else {
        fill(255);
        text("NOBODY IS WATCHING YOU", width/2, height/2);
    }
}