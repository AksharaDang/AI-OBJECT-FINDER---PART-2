status="";
video="";

function setup(){
    canvas=createCanvas(350,450);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(350, 450);

}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects";
    document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}

function draw(){
    image(video, 0, 0, 350, 450);
}