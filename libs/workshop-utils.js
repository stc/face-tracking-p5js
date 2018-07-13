var ctracker;
var videoInput;
var positions = [];

function loadCamera() {
    // setup camera capture
    videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    videoInput.id("v");
    var mv = document.getElementById("v");
    mv.muted = true;
}

function loadTracker() {
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);
}

function getPositions() {
    // get array of face marker positions [x, y] format
    positions = ctracker.getCurrentPosition();
    
}


// emotion detection

function getEmotions() {
    var cp = ctracker.getCurrentParameters();
    predictedEmotions = emotions.meanPredict(cp);
}

delete emotionModel['disgusted'];
delete emotionModel['fear'];
var emotions = new emotionClassifier();
var predictedEmotions;
emotions.init(emotionModel);
var emotionData = emotions.getBlank();

