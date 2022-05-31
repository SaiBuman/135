status1 = "" ;
function setup() {
    canvas = createCanvas(480,380);
 }

 function preload() {
     video = createVideo("video.mp4");
     video.hide();
 }

 function draw() {
     image(video, 0,0,480,380);
 }

 function start() {
     objectDetecter = ml5.objectDetector("cocossd",modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Object"
 }

 function modelLoaded() {
     console.log("Model Loaded !");
     status1 = true ;
     video.loop();
     video.speed(1);
     video.volume(1);
 }