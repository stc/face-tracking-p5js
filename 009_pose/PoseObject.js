class Pose {
	constructor() {
		this.mappedPose = [];
		for(let i=0; i<17; i++) {
			this.mappedPose.push([0,0]);
		}
	}

	update(pose) {
		for(let i=0; i<pose.length; i++) {
			this.mappedPose[i] = [ this.mapX(pose[i].position.x), this.mapY(pose[i].position.y) ];
		}
	}

	draw() {
		for(let i=0; i< this.mappedPose.length; i++) {
			if(i<5) {
				noStroke();
				fill(255,255,0);
				rect(this.mappedPose[i][0], this.mappedPose[i][1],10, 10);
			}
			/*
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
			
			*/
			
			noStroke();
			text(i, this.mappedPose[i][0]+10,this.mappedPose[i][1]);
		}	
	}

	mapX(x) {
		return map(x,0,640,(width-height*captureRatio)/2, (width-height*captureRatio) /2 + height * captureRatio);
	}

	mapY(y) {
		// raw html5 video capture differs from p5js capture aspects for some reason...
		return map(y,0,360,0 + height/10,height-height/10);
	}
}