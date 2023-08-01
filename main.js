img="";
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting objects";
}
function preload()
{
    img=loadImage('dog_cat.jpg');
}
function modelLoaded()
{
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function draw(){
image(img,0,0,640,420);
fill("red");
text("Dog",65,75);
noFill();
stroke("red")
rect(30,60,450,350);

fill("blue");
text("Cat",400,110);
noFill();
stroke("blue");
rect(300,90,270,320);

}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
    }
}