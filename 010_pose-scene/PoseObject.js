class Pose {
	constructor() {
		this.pose = [];
		for(let i=0; i<17; i++) {
			this.pose.push([0,0]);
		}
	}

	update(pose) {
		for(let i=0; i<pose.length; i++) {
			this.pose[i] = [ pose[i].position.x, pose[i].position.y ] ;
		}
	}

	draw() {
		for(let i=0; i< this.pose.length; i++) {
			noStroke();
			fill(255,0,100);
			ellipse(this.pose[i][0], this.pose[i][1],10, 10);
			
			
			
			stroke(255);
			line(this.pose[5][0], this.pose[5][1],  this.pose[6][0],  this.pose[6][1]);
			
			/*
			line(this.pose[5][0], this.pose[5][1],  this.pose[6][0],  this.pose[6][1]);
			line(this.pose[5][0], this.pose[5][1],  this.pose[7][0],  this.pose[7][1]);
			line(this.pose[6][0], this.pose[6][1],  this.pose[8][0],  this.pose[8][1]);
			line(this.pose[8][0], this.pose[8][1],  this.pose[10][0], this.pose[10][1]);
			line(this.pose[7][0], this.pose[7][1],  this.pose[9][0],  this.pose[9][1]);
			line(this.pose[5][0], this.pose[5][1],  this.pose[11][0], this.pose[11][1]);	
			line(this.pose[6][0], this.pose[6][1],  this.pose[8][0],  this.pose[8][1]);
			line(this.pose[6][0], this.pose[6][1],  this.pose[12][0], this.pose[12][1]);
			line(this.pose[11][0],this.pose[11][1], this.pose[12][0], this.pose[12][1]);
			line(this.pose[11][0],this.pose[11][1], this.pose[13][0], this.pose[13][1]);
			line(this.pose[13][0],this.pose[13][1], this.pose[15][0], this.pose[15][1]);
			line(this.pose[12][0],this.pose[12][1], this.pose[14][0], this.pose[14][1]);
			line(this.pose[14][0],this.pose[14][1], this.pose[16][0], this.pose[16][1]);	
			*/
			
			noStroke();
			fill(255,100);
			textSize(30);
			text(i, this.pose[i][0]+10,this.pose[i][1]);
		}	
	}
}