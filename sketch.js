var z =0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('#14A600');

  textSize(100);
  textStyle(BOLD);
  textAlign(CENTER);
  text('BlackLivesMatter', 750, 500);
  fill(0, 102, 153);

}

function draw() {
  // put drawing code here

  while(z < windowHeight) {
  	mouseX = random(windowWidth);
  	mouseY = random(windowHeight)
  	z = z+ 1;
  	print(z);

 }

  fill('#E01A00');
  stroke('#7A0A00');
  square('#E01A00')

  if(mouseIsPressed) {
  	square(mouseX, mouseY, 55);
  	fill('#000000')
  } else {
  	square(mouseX, mouseY, 55, 20);
 

  }

    print(mouseIsPressed);

 }



 	
