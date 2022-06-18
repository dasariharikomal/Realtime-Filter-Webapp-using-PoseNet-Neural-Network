
nose_x = 0 ;
nose_y = 0 ;

function  preload() {

clown = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");

}

function  setup() {
canvas = createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose' , gotPose);

}

function  draw() {
 image(video,0,0,300,300);
 image(clown, nose_x ,nose_y ,30 ,30);
}

function gotPose(results) {

  if (results.length > 0 ) {

     console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
  }

}



function  take_snapshot() {
save("friend.png");

}

function  modelLoaded() {
console.log("posenet is initialized");
}

