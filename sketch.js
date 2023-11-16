let translateX, translateY;
let sc;
let counter = 0;
var drips = [];
var interval;
let img_prew, img;
let pointsAll = [];
let pointsLine = [];
const NYt = document.getElementById("NY").innerText;
let font; 

function preload() {
	//img_prew = loadImage("2024_prew.png");
  img = loadImage("1080x1920.png");
  font = loadFont("fonts/TOMO Zomba Pro Regular.otf");
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(1080, 1920);
  img.resize(1080, 0);
  //img_prew.resize(1080, 0);
  translateX = -10;
  translateY = 5;
  sc = 1;

  const shape = document.getElementsByTagName(`path`);
  for (let i = 0; i < shape.length; i++) {
    pointsLine[i] = points(shape[i], 5);
    pointsAll.push(pointsLine[i]);
  }

  
	interval = img.height / 25;
	noStroke();
	for (let y = interval / 2; y <= img.height; y += interval) {
		for (let x = interval / 2; x <= img.width; x += interval) {
			let c = img.get(x, y);
			c[3] = 200;
			let id = c[0] + c[1] + c[2];
			if (id > 0) {
				drips.push(new Pixel(x, y, c, id));
			}
		}
	}
}

function draw() {
  background(255);
  //image(img, 0, 0);
  image(img, 0, 0);
  counter += 2;
  noFill();
  stroke(249, 236, 220, 210);
  //stroke(255, 0, 0);
  strokeWeight(7);

 // let m = {x: mouseX, y: mouseY};
  //if (pointInPoly(vtx, m)) {
      //fill(255,0,0);
      //} 

  for (let i = 0; i < pointsAll.length; i++) {
    drawSvg(pointsAll[i]);
  }

  noStroke();
  
  	for (let d of drips) {  
		if (d.id < counter) {
			d.move();
			if (d.y > 0) {
				d.show();
			}
		}
	}

  textFont(font);
  textSize(110);
  textLeading(95);
  //fill(168, 0, 0);
  fill(0);
  push()
  translate(600, 500);
  //rotate(-12.8);
  text(NYt, 0, 0);
  pop();
}

function points(s_, n) {
  const length = s_.getTotalLength();
   let vtx = [];
   let j = 0;
   while(j < length){
      let arr = s_.getPointAtLength(j);
      vtx.push({x:(arr.x + translateX)*sc, y:(arr.y + translateY)*sc});
      j+=n;
    }
    return vtx;  
}

function pointInPoly(verts, pt) {
  let c = false;
  if (pt.x != 0 && pt.y != 0) {for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    if (((verts[i].y > pt.y) != (verts[j].y > pt.y)) && (pt.x < (verts[j].x - verts[i].x) * (pt.y - verts[i].y) / (verts[j].y - verts[i].y) + verts[i].x)) c = !c;
  }
}
  return c;
}

function drawSvg(p) {
  beginShape();
    for(let i = 0; i < p.length - 1; i++) {
      vertex(p[i].x, p[i].y);
    }
  endShape(CLOSE);
}