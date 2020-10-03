function preload(){
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
canvas.parent("canvas");

video=createCapture(VIDEO);
video.hide();


poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotresults);
}
function  modelLoaded(){
console.log("PoseNet is loaded");
}
function gotresults(results)
{
if(results){
console.log(results);
rightwristY = results[0].pose.rightWrist.y;
rightwristX = results[0].pose.rightWrist.x;
if(rightwristX>0){
circle(rightwristX, rightwristY,10); 
} 
}
}
function draw(){
console.log("rcds");
image(video,0,0,600,400);
}