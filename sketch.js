let x = 0;
let radius = 50;
let speed = 3;

// Call setup only once!
function setup() {
  const canvas = createCanvas(400, 400);
  // Places the canvas within the HTML element with id "sketch-holder"
  canvas.parent("sketch-holder");
  background(200, 200, 200);
}

function draw() {
  // Example code
  const xColor = map(mouseX, 0, 400, 0, 255);
  const yColor = map(mouseY, 0, 400, 0, 255);
  fill(200, xColor, yColor);
  ellipse(mouseX, mouseY, 50, 50);
}
