/*

Example taken from ml5js repository:
https://github.com/ml5js/ml5-examples/tree/master/p5js/PoseNet

*/

let w = 640;
let h = 480;
let video;
let poseNet;
let poses = [];
let skeletons = [];

function setup() {
  createCanvas(w, h);
  video = createCapture(VIDEO);
  
  poseNet = ml5.poseNet(video, 'multiple', gotPoses);
  
  video.hide();
  fill(255);
  stroke(255);
}

function draw() {
  image(video, 0, 0, w, h);
  drawKeypoints();
  drawSkeleton();
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
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

function gotPoses(results) {
  poses = results;
}
