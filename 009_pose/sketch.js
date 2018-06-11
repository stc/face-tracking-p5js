let capture;
const captureRatio = 1.333;
let cPoses = [];
let cPoseNum = 0;
let pPoseNum = 0;

function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.id("mCanvas");
	capture = createCapture(VIDEO);
	capture.hide();
}

function draw() {
	background(0);
	push();
	tint(255,255);
	scale(-1,1);
	translate(-width + ((width-height*captureRatio)/2),0);
	image(capture,0,0,height*captureRatio,height);
	pop();

	// recreate pose array if there is a change in number of poses
	cPoseNum = mPoses.length;
	if(cPoseNum != pPoseNum) {
		cPoses = [];
		for(let i=0; i<cPoseNum; i++) {
			cPoses.push(new Pose(mPoses[i]));
		}
	}

	// update each pose
	for(let i=0; i<cPoseNum; i++) {	
		for(let j=0;j<mPoses[i].keypoints.length;j++) {
			if(mPoses[i].score>0.2 && mPoses[i].score < 0.5) {
				cPoses[i].update(mPoses[i].keypoints);
			}
		}
	}
	// draw each pose
	for(let p of cPoses) {
		p.draw();
	}

	// set previous pose numbers to check if there is change
	pPoseNum = cPoseNum;
}

class Pose {
	constructor() {
		this.mappedPose = [];
	}

	update(pose) {
		this.mappedPose = [];
		for(let i=0; i<pose.length; i++) {
			this.mappedPose.push( [ this.mapX(pose[i].position.x), this.mapY(pose[i].position.y) ] );
		}
	}

	draw() {
		for(let i=0; i< this.mappedPose.length; i++) {
			if(i<5) {
				noStroke();
				fill(255,255,0);
				ellipse(this.mappedPose[i][0], this.mappedPose[i][1],10, 10);
			}
			stroke(255,0,100);
			strokeWeight(2);
			line(this.mappedPose[5][0], this.mappedPose[5][1],  this.mappedPose[6][0],  this.mappedPose[6][1]);
			line(this.mappedPose[5][0], this.mappedPose[5][1],  this.mappedPose[7][0],  this.mappedPose[7][1]);
			line(this.mappedPose[6][0], this.mappedPose[6][1],  this.mappedPose[8][0],  this.mappedPose[8][1]);
			line(this.mappedPose[8][0], this.mappedPose[8][1],  this.mappedPose[10][0], this.mappedPose[10][1]);
			line(this.mappedPose[7][0], this.mappedPose[7][1],  this.mappedPose[9][0],  this.mappedPose[9][1]);
			line(this.mappedPose[5][0], this.mappedPose[5][1],  this.mappedPose[11][0], this.mappedPose[11][1]);	
			line(this.mappedPose[6][0], this.mappedPose[6][1],  this.mappedPose[8][0],  this.mappedPose[8][1]);
			line(this.mappedPose[6][0], this.mappedPose[6][1],  this.mappedPose[12][0], this.mappedPose[12][1]);
			line(this.mappedPose[11][0],this.mappedPose[11][1], this.mappedPose[12][0], this.mappedPose[12][1]);
			line(this.mappedPose[11][0],this.mappedPose[11][1], this.mappedPose[13][0], this.mappedPose[13][1]);
			line(this.mappedPose[13][0],this.mappedPose[13][1], this.mappedPose[15][0], this.mappedPose[15][1]);
			line(this.mappedPose[12][0],this.mappedPose[12][1], this.mappedPose[14][0], this.mappedPose[14][1]);
			line(this.mappedPose[14][0],this.mappedPose[14][1], this.mappedPose[16][0], this.mappedPose[16][1]);	
		}	
	}

	mapX(x) {
		return map(x,0,640,(width-height*captureRatio)/2, (width-height*captureRatio) /2 + height * captureRatio);
	}

	mapY(y) {
		// raw html5 video capture differs from p5js capture aspects...
		return map(y,0,360,0 + height/10,height-height/10);
	}
}

