nose_x=0;
nose_y=0;
function preload(){
    x=loadImage('lipstick.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poses=ml5.poseNet(video,modelloded);
    poses.on('pose',kp);
}

function draw(){
    image(video,0,0,300,300);
    image(x,nose_x,nose_y,40,40);
}

function modelloded(){
    console.log("pose net is loded");
}

function kp(r){
    if(r.length>0){
        console.log(r);
        nose_x=r[0].pose.nose.x-24;
        nose_y=r[0].pose.nose.y+10;
    }
}

function take_snapshot(){
    save('Lipstck.png');
}