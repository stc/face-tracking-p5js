/*

A scene where multiple participants are involved in the interaction
todo: add multiple head positions

*/

let w = 640;
let h = 480;
let video;
let poseNet;
let poses = [];
let skeletons = [];

// physics for playful interaction
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
  createCanvas(w, h);
  video = createCapture(VIDEO);
  
  poseNet = ml5.poseNet(video, 'multiple', gotPoses);
  
  video.hide();
  fill(255);
  stroke(255);

  physics = new VerletPhysics2D();
  physics.setDrag(0.05);
  physics.setWorldBounds(new Rect((0, 0, width, height)));
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
  image(video, 0, 0, w, h);
  drawKeypoints();
  drawSkeleton();

  if (physics.particles.length < NUM_PARTICLES) {
    addParticle();
  }
    
  for (let i=0;i<physics.particles.length;i++) {
    let p = physics.particles[i];
    fill(255);
    noStroke();
    ellipse(p.x, p.y, 10, 10);
  }

  noStroke();
  text(int(frameRate()), 30, 30);
}

function drawSkeleton() {
  for(let i = 0; i < poses.length; i++) {
    for(let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

function drawKeypoints() {
  for(let i = 0; i < poses.length; i++) {
    for(let j = 0; j < poses[i].pose.keypoints.length; j++) {
      let keypoint = poses[i].pose.keypoints[j];
      if (keypoint.score > 0.2) {
        fill(255,0,100);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        if(j==0) {
          headPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(255,255,0);
          ellipse(keypoint.position.x, keypoint.position.y,200,200);
        }
      }
    }
  }
}

function gotPoses(results) {
  poses = results;
}
