# Face Tracking for Creative Coding
### Overview
A growing collection of examples used to demonstrate basic concepts of the usage of face tracking with creative coding on the modern web. This code has been collected and inited originally for Online Media Course (MOME), then it quickly became a basis for further workshops that are focusing on realtime interactions, creative animations and critical discussion on current technologies (think of face-id).

![001](https://user-images.githubusercontent.com/270431/40185787-c0e67830-59f3-11e8-9b94-5e619b195f57.jpg)
_fig. 1: Feature points of tracked faces_

![004inverted](https://user-images.githubusercontent.com/270431/40185873-0b663e18-59f4-11e8-94b8-250c339d3813.jpg)
_fig. 2: Left- Source Code in Brackets editor, Middle- Indexed feature points, Right- Error message_

### Installation
All the examples are using [P5JS](http://p5js.org/) for displaying graphics and playing back sounds. The face tracking is based on [clmtrackr](https://github.com/auduno/clmtrackr), except for _009_pose_ example, see below for details. Each of these libraries can be found in the 'libs' folder. To launch the experiments, download the [brackets](http://brackets.io/) editor. Open the folder of this repository and hit 'live preview' on the top right.

![003](https://user-images.githubusercontent.com/270431/40185938-32323722-59f4-11e8-98a0-0bb116c9bf3c.jpg)
_fig. 3: Scene example, where graphical elements are moved, based on head position_

![002](https://user-images.githubusercontent.com/270431/40185998-5080e4f8-59f4-11e8-879a-97ec2d30deef.jpg)
_fig. 4: Sentiment Analysis_

### Folder Structure
Each example includes media files (sounds, animated gifs, images etc). The 'libs' folder contains the necessary js libraries and the pre-trained face traclking models.

### Workshop Schedule
See the [wiki](https://github.com/stc/face-tracking-p5js/wiki/Schedule) for detailed workshop schedule and the specific tasks we are dealing with during the session. Durations of the parts may vary depending on the knowledge and interest of the participants.

### Notes
_009_pose_ example is highly experimental and a quick hack to use [pose estimation from tensorflow.js](https://github.com/tensorflow/tfjs-models/tree/master/posenet) together with p5js. It can be tried out, and is set up to track multiple poses from a single camera image. All the variables and parameters are baked into the pre-generated ts-pose.js file, if you'd like to tinker with it, I recommend the [official site](https://github.com/tensorflow/tfjs-models/tree/master/posenet). However, for a quick demonstration, you can make your own drawing methods and desired interactions on the p5 side. Needs network connection to load the pretrained Tensorflow models.

(c) 2018 Agoston Nagy / gpl v3

