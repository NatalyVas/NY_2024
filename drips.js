class Pixel {
	constructor(x, y, c, id) {
		this.x = x;
		this.y = -300;
		this.yvel = 0;
		this.basex = x;
		this.basey = y;
		this.c = c;
		this.id = id;
		this.falling = true;
	}
	move() {
		this.y += this.yvel;

		let inShape = false;
		for (let i = 0; i < pointsAll.length; i++ ) {
			if (pointInPoly(pointsAll[i], this)) {
					inShape = true;
					break;
			}
		}

		if (pointInPoly(pointsAll[1], this) && pointInPoly(pointsAll[2], this)) {
			inShape = false;
		}

		if (this.y < this.basey || inShape) {
			this.yvel += 0.5;
		} else {
			this.y -= this.yvel;
			this.yvel *= -0.3;
			let d = dist(this.x, this.y, mouseX, mouseY);
			if (d < 100) {
				this.yvel -= 1000 / (d + 10);
			}
		}
	}
	show() {
		push();
        //noStroke();
		fill(this.c);
		translate(this.x, this.y);
		//rotate(this.y-this.basey);
        ellipse(0, 0, 1.1*interval);
      
		//rect(0, 0, 1.1*interval);
		pop();
	}
}