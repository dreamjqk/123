function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	background(0);
}

function draw() {
	background(255);
	var asd=map(mouseX,0,width,0,30)
	for(x=0;x<width;x=x+50){
		for(y=0;y<height;y=y+50){
			noFill()
			stroke(255,255,0)
			rectMode(CENTER)
			ellipse(x,y,asd+50);
		  stroke(60,100,60)
			rectMode(CENTER)
		  rect(x,y,50+asd)
			stroke(0,0,100)
		  ellipse(x+25,y+25,asd+30)
			stroke(100,100,100)
			ellipse(x+50,y+50,asd+60)
			stroke(255,0,255)
			rect(x+10,y+10,asd+20)
		}
	}
}