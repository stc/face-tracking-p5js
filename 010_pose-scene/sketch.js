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
let textures = [];
let pPositions = [];
let cPositions = [];
let xs = [];
let easing = 0.1;

// physics for playful interaction
let VerletPhysics2D = toxi.physics2d.VerletPhysics2D,
    VerletParticle2D = toxi.physics2d.VerletParticle2D,
    AttractionBehavior = toxi.physics2d.behaviors.AttractionBehavior,
    GravityBehavior = toxi.physics2d.behaviors.GravityBehavior,
    Vec2D = toxi.geom.Vec2D,
    Rect = toxi.geom.Rect;

let NUM_PARTICLES = 10;

let physics;
let mouseAttractor;
let mousePos;

let headAttractor;
let headPos;

let leftSAttractor;
let leftPos;

let rightSAttractor;
let rightPos;

let leftHAttractor;
let leftHPos;

let rightHAttractor;
let rightHPos;

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  loadTextures();
  for(let i=0;i<NUM_PARTICLES;i++) {
    let p = createVector(0,0);
    pPositions.push(p);
    cPositions.push(p);
    xs.push(0);
  }

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', function (results) {
    poses = results;
  });

  
  video.hide();
  fill(255);
  stroke(255);

  physics = new VerletPhysics2D();
  physics.setDrag(0.05);
  physics.setWorldBounds(new Rect(50, 0, width-100, height-height/3));
  physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.15)));

  headPos = new Vec2D(width/2,height/2); 
  headAttractor = new AttractionBehavior(headPos, 200, -2.9);
  physics.addBehavior(headAttractor);

  leftPos = new Vec2D(width/2,height/2); 
  leftSAttractor = new AttractionBehavior(leftPos, 100, -2.9);
  physics.addBehavior(leftSAttractor);
  
  rightPos = new Vec2D(width/2,height/2); 
  rightSAttractor = new AttractionBehavior(rightPos, 100, -2.9);
  physics.addBehavior(rightSAttractor);

  leftHPos = new Vec2D(width/2,height/2); 
  leftHAttractor = new AttractionBehavior(leftHPos, 100, -2.9);
  physics.addBehavior(leftHAttractor);

  rightHPos = new Vec2D(width/2,height/2); 
  rightHAttractor = new AttractionBehavior(rightHPos, 100, -2.9);
  physics.addBehavior(rightHAttractor);
}

function addParticle() {
  let randLoc = Vec2D.randomVector().scale(5).addSelf(width / 2, 0);
  let p = new VerletParticle2D(randLoc);
    physics.addParticle(p); 
    physics.addBehavior(new AttractionBehavior(p, 100, -0.8, 0.1));
}

function draw() {
  physics.update();
  background(255);
  tint(255,40);
  image(video, 0, 0, w, h);
  drawKeypoints();
  drawSkeleton();

  stroke(0,100);
  line(0,height-height/3,width,height-height/3);

  if (physics.particles.length < NUM_PARTICLES) {
    addParticle();
  }
    
  for (let i=0;i<physics.particles.length;i++) {
    let p = physics.particles[i];
    cPositions[i]=createVector(p.x,p.y);
    //fill(0);
    //noStroke();
    //ellipse(p.x, p.y, 10, 10);

    var angleDeg = Math.atan2(pPositions[i].y - p.y, pPositions[i].x - p.x);
    let targetX = angleDeg;
    let dx = targetX - xs[i];
    xs[i] += dx * easing;
  
    tint(255);
    push();
    translate(p.x, p.y);
    rotate(xs[i]);
    image(textures[i],-50,-50,100,100);
    pop();
    pPositions[i] = cPositions[i];
  }

  noStroke();
  //text(int(frameRate()), 30, 30);
}

function drawSkeleton() {
  for(let i = 0; i < poses.length; i++) {
    for(let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      stroke(0);
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
        text(j,keypoint.position.x+10, keypoint.position.y);
        if(j==0) {
          headPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(100,100,0);
          ellipse(keypoint.position.x, keypoint.position.y,200,200);
        }
        if(j==5) {
          leftPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(100,100,0);
          ellipse(keypoint.position.x, keypoint.position.y,100,100);
        }
        if(j==6) {
          rightPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(100,100,0);
          ellipse(keypoint.position.x, keypoint.position.y,100,100);
        }

        if(j==9) {
          rightHPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(100,100,0);
          ellipse(keypoint.position.x, keypoint.position.y,100,100);
        }

        if(j==10) {
          leftHPos.set(keypoint.position.x, keypoint.position.y);
          noFill();
          stroke(100,100,0);
          ellipse(keypoint.position.x, keypoint.position.y,100,100);
        }

      }
    }
  }
}

function loadTextures() {
  for(let i=0;i<10;i++) {
    let myTexture = loadImage("data/airplanes/00" + i + ".png");
    textures.push(myTexture);
  }
}

function modelLoaded() {
  print('model loaded'); 
}

