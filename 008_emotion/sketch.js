var ctracker;

delete emotionModel['disgusted'];
delete emotionModel['fear'];
var ec = new emotionClassifier();
ec.init(emotionModel);
var emotionData = ec.getBlank();

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
}
      
function draw() {
    clear();
    // darken video bg
    fill(0,150);
    rect(0,0,width,height);
    
    fill(255);
    var positions = ctracker.getCurrentPosition();
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 2, 2);
    }
    
    var cp = ctracker.getCurrentParameters();
    var er = ec.meanPredict(cp);
   
    if (er) {
        // andry=0, sad=1, surprised=2, happy=3
        for (var i = 0;i < er.length;i++) {
            rect(i * 110+20, height-80, 30, -er[i].value * 30);    
        }
    }
    text("ANGRY", 20, height-40);
    text("SAD", 130, height-40);
    text("SURPRISED", 220, height-40);
    text("HAPPY", 340, height-40);
    
}