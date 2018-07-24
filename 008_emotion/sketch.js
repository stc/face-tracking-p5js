function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,300);
}
      
function draw() {
    getPositions();
    getEmotions();
    
    clear();
    
    noStroke();
    fill(0,150);
    rect(0,0,width,height);
    
    drawPoints();

    if (emotions) {
        // andry=0, sad=1, surprised=2, happy=3
        for (var i = 0;i < predictedEmotions.length;i++) {
            rect(i * 110+20, height-80, 30, -predictedEmotions[i].value * 30);    
        }
    }
    
    text("ANGRY", 20, height-40);
    text("SAD", 130, height-40);
    text("SURPRISED", 220, height-40);
    text("HAPPY", 340, height-40);
    
}

function drawPoints() {
    fill(255);
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 2, 2);
    }
}