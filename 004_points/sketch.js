function setup() {
    loadCamera();
    loadTracker();
    
    // setup canvas
    var canvas = createCanvas(400, 300);  
    canvas.position(0,0);
}
      
function draw() {
    background(230);
    
    getPositions();
    
    drawPoints();
}

function drawPoints() {
    for (var i=0; i<positions.length -1; i++) {
        // set the color of the ellipse based on position on screen
        fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 100), 0);
        
        // draw ellipse
        noStroke();
        ellipse(width - positions[i][0], positions[i][1], 4, 4);
        
        // draw line
        stroke(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 100), 0,50);
        line(width - positions[i][0], positions[i][1], width - positions[i+1][0], positions[i+1][1]);
    }
}