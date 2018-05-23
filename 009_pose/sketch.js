function setup() {
	var canvas = createCanvas(600,500);
	canvas.position(0,0);
	canvas.id("mCanvas");
}

function draw() {
	
	// p5's clear method is buggy, clearing canvas 
	// with raw canvaselement call
	var c=document.getElementById("mCanvas");
	var ctx=c.getContext("2d");
	ctx.clearRect(0,0,600,500);
	
	background(0,0,0,100);
	for(let i=0; i<mPoses.length; i++) {
		//console.log(mPoses[0]);
		for(let j=0;j<mPoses[i].keypoints.length;j++) {
			if(mPoses[i].score>0.2 && mPoses[i].score < 0.5) {
				if(j<5) {
					noStroke();
					fill(255);
					ellipse(mPoses[i].keypoints[j].position.x, mPoses[i].keypoints[j].position.y,10, 10);
				}
				stroke(255);
				strokeWeight(2);
				line(mPoses[i].keypoints[5].position.x,mPoses[i].keypoints[5].position.y, mPoses[i].keypoints[6].position.x, mPoses[i].keypoints[6].position.y);
				line(mPoses[i].keypoints[5].position.x,mPoses[i].keypoints[5].position.y, mPoses[i].keypoints[7].position.x, mPoses[i].keypoints[7].position.y);
				line(mPoses[i].keypoints[6].position.x,mPoses[i].keypoints[6].position.y, mPoses[i].keypoints[8].position.x, mPoses[i].keypoints[8].position.y);
				line(mPoses[i].keypoints[8].position.x,mPoses[i].keypoints[8].position.y, mPoses[i].keypoints[10].position.x, mPoses[i].keypoints[10].position.y);
				line(mPoses[i].keypoints[7].position.x,mPoses[i].keypoints[7].position.y, mPoses[i].keypoints[9].position.x, mPoses[i].keypoints[9].position.y);
				line(mPoses[i].keypoints[5].position.x,mPoses[i].keypoints[5].position.y, mPoses[i].keypoints[11].position.x, mPoses[i].keypoints[11].position.y);	line(mPoses[i].keypoints[6].position.x,mPoses[i].keypoints[6].position.y, mPoses[i].keypoints[8].position.x, mPoses[i].keypoints[8].position.y);
				line(mPoses[i].keypoints[6].position.x,mPoses[i].keypoints[6].position.y, mPoses[i].keypoints[12].position.x, mPoses[i].keypoints[12].position.y);
				line(mPoses[i].keypoints[11].position.x,mPoses[i].keypoints[11].position.y, mPoses[i].keypoints[12].position.x, mPoses[i].keypoints[12].position.y);
				line(mPoses[i].keypoints[11].position.x,mPoses[i].keypoints[11].position.y, mPoses[i].keypoints[13].position.x, mPoses[i].keypoints[13].position.y);
				line(mPoses[i].keypoints[13].position.x,mPoses[i].keypoints[13].position.y, mPoses[i].keypoints[15].position.x, mPoses[i].keypoints[15].position.y);
				line(mPoses[i].keypoints[12].position.x,mPoses[i].keypoints[12].position.y, mPoses[i].keypoints[14].position.x, mPoses[i].keypoints[14].position.y);
				line(mPoses[i].keypoints[14].position.x,mPoses[i].keypoints[14].position.y, mPoses[i].keypoints[16].position.x, mPoses[i].keypoints[16].position.y);	
			}	
		}
	}
}