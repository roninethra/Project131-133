img= "";
status= "";
objectarray= [];
function preload(){
    img= loadImage("Comb.png");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML= "Detecting Object";
}

function modelloaded(){
    console.log("You're so late!");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error("You made a Mistake! Go back and fix it!");
    }
    else{
        console.log(result);
        objectarray=result;
        status=true;
    }
}
function draw(){
    image(img, 0, 0, 640, 420);
    console.log(status);
    if(status != ""){
        document.getElementById("status").innerHTML= "Detected " + objectarray.length + " " + "Objects";
        for (let index = 0; index < objectarray.length; index++) {
            const element = objectarray[index];
            noFill();
            stroke("red");
            text(element.label, element.x+10, element.y+10);
            text(element.confidence.toFixed(2)*100+"%", element.x+10, element.y+30);
            rect(element.x, element.y, element.width, element.height);
            
            
        }
    }
    
}