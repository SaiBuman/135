status1 = "" ;
object = [] ;
function setup() {
    canvas = createCanvas(480,380);
 }

 function preload() {
     video = createVideo("video.mp4");
     video.hide();
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

 function gotresult(error,result) {
      if (error) {
          console.error(error);
      }

      else {
          console.log(result);
          object = result ;
      }
 }

 function draw() {
    image(video, 0,0,480,380);

    if (status1 != " ") {
        objectDetecter.detect(video,gotresult);
        for (let i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected" ; 
            document.getElementById("object").innerHTML = "Objects found : " + object.length;
            percent = floor(object[i].confidence*100);
            fill("#4961e1");
            text(object[i].label + " " + percent + " %" , object[i].x + 15, object[i].y + 15);
            nofill();
            stroke("#4961e1");
            rect(object[i].x , object[i].y , object[i].width ,object[i].height);
        }
    }
}