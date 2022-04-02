function preload(){}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
    image(circle)
}

function take_snapshot(){
    save("download.png");
}