function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,400);
}
      
function draw() {
    getPositions();
    
    background(0);
    
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