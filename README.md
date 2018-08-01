# Face Tracking for Creative Coding
### Overview
A growing collection of examples used to demonstrate basic concepts of the usage of face tracking with creative coding on the modern web. This repository is the basis of the workshop series called _DataFaces_. These events are focusing on data politics, creative coding, machine learning and critical discussion on cutting edge (surveillance based) technologies, the concepts are usually introduced in a playful & practical way using open source coding frameworks. 

![001](https://user-images.githubusercontent.com/270431/40185787-c0e67830-59f3-11e8-9b94-5e619b195f57.jpg)
_fig. 1: Feature points of tracked faces_

![004inverted](https://user-images.githubusercontent.com/270431/40185873-0b663e18-59f4-11e8-94b8-250c339d3813.jpg)
_fig. 2: Left- Source Code in Brackets editor, Middle- Indexed feature points, Right- Error message_

### Installation
All the examples are using [P5JS](http://p5js.org/) for displaying graphics and playing back sounds. The face tracking is based on [clmtrackr](https://github.com/auduno/clmtrackr), except for _009_pose-basic_ &  _010_pose_scene_ examples, see below for details. Each of these libraries can be found in the 'libs' folder. To launch the experiments, download the [brackets](http://brackets.io/) editor. Open the folder of this repository and hit 'live preview' on the top right.

![003](https://user-images.githubusercontent.com/270431/40185938-32323722-59f4-11e8-98a0-0bb116c9bf3c.jpg)
_fig. 3: Scene example, where graphical elements are moved, based on head position_

![002](https://user-images.githubusercontent.com/270431/40185998-5080e4f8-59f4-11e8-879a-97ec2d30deef.jpg)
_fig. 4: Sentiment Analysis_

### Folder Structure
Each example includes media files (sounds, animated gifs, images etc). The 'libs' folder contains the necessary js libraries and the pre-trained face traclking models. The examples are kept as simple as possible, so some html related manipulation needed to be wrapped into some utility functions. Check [libs/worshop-utils.js](https://github.com/stc/face-tracking-p5js/blob/master/libs/workshop-utils.js) on how these simplified, workshop specific functions operate (loading camera, tracker, etc.)

### Workshop Schedule
See the [wiki](https://github.com/stc/face-tracking-p5js/wiki/Schedule) for detailed workshop schedule and the specific tasks we are dealing with during the session. Durations of the parts may vary depending on the knowledge and interest of the participants.

### Notes

<img src="https://user-images.githubusercontent.com/270431/41465910-53f52e6a-70a0-11e8-924d-42090a27b4d0.gif " data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="250" />

_009_pose-basic_ &  _010_pose_scene_ examples are using [pose estimation from tensorflow.js](https://github.com/tensorflow/tfjs-models/tree/master/posenet) together with p5js (we are using it for multiple head tracking on the workshop). This version of PoseNet is built with the [ml5 javascript libary](https://ml5js.org/), that aims to make machine learning accessible to a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies.


(c) 2018 Agoston Nagy / gpl v3

