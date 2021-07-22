var backgroundImg;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (backgroundImg)
    background(backgroundImg);

}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);
  if (hour >= 0 && hour <= 18) {
    bg = "images/1.jpg";
  } else if(hour >= 18 && hour <= 24) {
    bg = "images/2.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}