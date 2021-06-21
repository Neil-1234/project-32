const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage;
var response,j,daytime,hour;
var ampm;

async function gettime(){
    response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    j = await response.json();
    daytime = j.datetime;
    hour =  daytime.slice(11,13);
   if(hour >= 6 && hour <= 8){
       var bg = "sunrise1.png";
   }
   if(hour >= 8 && hour <= 10){
    var bg = "sunrise2.png";
   }
   if(hour >= 10 && hour <= 12){
    var bg = "sunrise3.png";
   } 
   if(hour >= 12 && hour <= 14){
    var bg = "sunrise4.png";
   }
   if(hour >= 14 && hour <= 16){
    var bg = "sunrise5.png";
   }
   if(hour >= 16 && hour <= 18){
    var bg = "sunrise6.png";
   }
   if(hour >= 18 && hour <= 20){
    var bg = "sunset7.png";
   }
   if(hour >= 20 && hour <= 22){
    var bg = "sunset8.png";
   }
   if(hour >= 22 && hour <= 24){
    var bg = "sunset9.png";
   } 
   if(hour >= 24 && hour <= 2){
    var bg = "sunset10.png";
   }
   if(hour >= 2 && hour <= 4){
    var bg = "sunset11.png";
   }
   if(hour >= 4 && hour <= 6){
    var bg = "sunset7.png";
   }

   backgroundimage = loadImage(bg);
    console.log(hour);

}

function preload() {
    // create getBackgroundImg( ) here
    gettime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundimage ){
        background(backgroundimage);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);
}