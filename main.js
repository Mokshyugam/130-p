song1 ="";
song2 ="";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreleftwrist = 0;

function proload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function gotPoses(results)
{
  if(results.length > 0)
  {
	leftWristX = results[0].pose.keypoint.score;
	leftWristY = results[0].pose.keypoint.score;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	leftWrist = results[0].pose.keypoint[9].score;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);	
  }
}
function draw()
{
	image(video, 0, 0, 600, 500);
	fill("#ff081b");
	stroke("#ff081b");
	circle(leftWristX, leftWristY, 20);
	Innumberleftwristy = Number(leftWristY);
}