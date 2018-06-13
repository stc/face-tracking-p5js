let capture;
let cPoses = [];

function setup() {
	let canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.id("mCanvas");
	capture = createCapture(VIDEO);
	capture.hide();
}

function draw() {
	// p5's clear method is buggy, clearing canvas 
	// with raw canvaselement call
	var c=document.getElementById("mCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0,0,windowWidth,windowHeight);
	
	cPoses = [];
	for(let i=0; i<mPoses.length; i++) {	
		cPoses.push(new Pose(mPoses[i]));
		for(let j=0;j<mPoses[i].keypoints.length;j++) {
			if(mPoses[i].score>0.2 && mPoses[i].score < 0.5) {
				cPoses[i].update(mPoses[i].keypoints);
			}
		}
	}
	for(let p of cPoses) {
		p.draw();
	}

	fill(255);
	text(int(frameRate()), 30, 30);
}


