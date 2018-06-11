let capture;
const captureRatio = 1.333;
let cPoses = [];

let VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
    VerletParticle2D = toxi.physics2d.VerletParticle2D,
    AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
    GravityBehavior = toxi.physics2d.behaviors.GravityBehavior,
    Vec2D = toxi.geom.Vec2D,
    Rect = toxi.geom.Rect;

let NUM_PARTICLES = 100;

let physics;
let mouseAttractor;
let mousePos;

let headAttractor;
let headPos;

function setup() {
	let canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.id("mCanvas");
	capture = createCapture(VIDEO);
	capture.hide();

	physics = new VerletPhysics2D();
  	physics.setDrag(0.05);
  	physics.setWorldBounds(new Rect((width-height*captureRatio)/2 +200, 0, height * captureRatio-400, height));
  	physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.15)));

  	headPos = new Vec2D(width/2,height/2); 
  	headAttractor = new AttractionBehavior(headPos, 200, -0.9);
  	physics.addBehavior(headAttractor);
}

function addParticle() {
	let randLoc = Vec2D.randomVector().scale(5).addSelf(width / 2, 0);
 	let p = new VerletParticle2D(randLoc);
  	physics.addParticle(p); 
  	physics.addBehavior(new AttractionBehavior(p, 20, -1.2, 0.01));
}

function draw() {
	physics.update();
	background(0);
	push();
	tint(255,50);
	scale(-1,1);
	translate(-width + ((width-height*captureRatio)/2),0);
	image(capture,0,0,height*captureRatio,height);
	pop();

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

	if(cPoses.length>0) headPos.set(cPoses[0].mappedPose[0][0], cPoses[0].mappedPose[0][1] - 200); 

	if (physics.particles.length < NUM_PARTICLES) {
    	addParticle();
  	}
  	
  	for (let i=0;i<physics.particles.length;i++) {
    	let p = physics.particles[i];
    	fill(255);
    	rect(p.x, p.y, 10, 10, 2);
    	
  	}
	
	fill(255);
	text(frameRate(), 30, 30);

	stroke(255,100);
	noFill();
	rect((width-height*captureRatio)/2 +200, 0, height * captureRatio-400, height);
}

function mousePressed() {
  	addParticle();
  	mousePos = new Vec2D(mouseX, mouseY); 
  	mouseAttractor = new AttractionBehavior(mousePos, 250, 0.9);
  	physics.addBehavior(mouseAttractor);
}

function mouseDragged() {
  	mousePos.set(mouseX, mouseY);
}

function mouseReleased() {
  	physics.removeBehavior(mouseAttractor);
}


