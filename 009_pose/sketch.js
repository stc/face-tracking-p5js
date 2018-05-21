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

	for(let i=0; i<mPoses.length; i++) {
		console.log(mPoses[0]);
		for(let j=0;j<mPoses[i].keypoints.length;j++) {
			if(mPoses[i].score>0.2 && mPoses[i].score < 0.9) {
				noStroke();
				fill(255,0,100);
				ellipse(mPoses[i].keypoints[j].position.x, mPoses[i].keypoints[j].position.y,10, 10);
				if(j>=6){
					stroke(255,0,0);
					line(mPoses[i].keypoints[5].position.x,mPoses[i].keypoints[5].position.y, mPoses[i].keypoints[6].position.x, mPoses[i].keypoints[6].position.y);
				
				}
			}	
		}
	}
}