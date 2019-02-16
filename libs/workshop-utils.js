
/*

Global variables to make our life easier

*/

var ctracker;
var videoInput;
var positions = [];
var canvas;

/*

Load & align the canvas to match the underlying html5 video element

*/

function loadCanvas(w, h) {
    canvas = createCanvas(w, h);
    canvas.position(0,0);
}

/*

Load the capture device, align under the canvas & mute it to avoid audiofeedback

*/

function loadCamera() {
    // setup camera capture
    videoInput = createCapture(VIDEO);
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    videoInput.id("v");
    var mv = document.getElementById("v");
    mv.muted = true;
}

/*

Load ClmTracker, apply to the video element

*/

function loadTracker() {
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);
}

/*

Get current face feature point positions. Should go into the draw() function

*/

function getPositions() {
    // get array of face marker positions [x, y] format
    positions = ctracker.getCurrentPosition();
}


/* 

Get current emotion predictions. Should go into the draw() function

*/

function getEmotions() {
    var cp = ctracker.getCurrentParameters();
    predictedEmotions = emotions.meanPredict(cp);
}

/*

Emotion-specific global variables

*/

delete emotionModel['disgusted'];
delete emotionModel['fear'];
var emotions = new emotionClassifier();
var predictedEmotions;
emotions.init(emotionModel);
var emotionData = emotions.getBlank();

