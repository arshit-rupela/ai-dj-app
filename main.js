everybody_dies_in_their_nightmare_song="";
childhood_song="";

rightWristX = 0;
leftWristX = 0;

rightWristY=0;
leftWristY=0;
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('POsenet is initialized');
}

function preload(){
    everybody_dies_in_their_nightmare_song = loadSound("music.mp3");
    childhood_song = loadSound("music2.mp3");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    }
}

function draw(){
    image(video,0,0,600,530);
}