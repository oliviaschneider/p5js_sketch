function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  
  // strokeWeight(3);
  noStroke();
  fill(255, 255, 255);
  circle(mouseX, mouseY,10);
}

function mousePressed() {
  background(0);
}