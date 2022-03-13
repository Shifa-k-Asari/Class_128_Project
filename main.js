song1 = "";
song2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song1 = "music.mp3";
    song2 = "music2.mp3";
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = m5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("RightWrist x = " + rightWristX + " RightWrist y = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("LeftWrist x = " + leftWristX + " LeftWrist y = " + leftWristY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}