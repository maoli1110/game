
function Bird() {
    this.y =height/2;
    this.x = 64;

    this.gravity = 0.4;
    this.lift = -10;
    this.velocity = 0;

    this.show = function() {
        fill(255);
        // ellipse(this.x, this.y, 32, 32);
        image(newBird, 100, this.y-200, 250, 200); 
    }

    this.up = function() {
        this.velocity += this.lift;
        console.log(this.velocity)
    }

    this.update = function() {
        this.velocity += this.gravity;
        // this.velocity *= 0.5;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

}
