var bird;
var pipes = [];
var scorebox=document.getElementById('score')


function setup() {
    createCanvas(1000, 480);
    bg = loadImage('./bg.jpeg');
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(bg);
    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
    }
}

function keyPressed() {
    if (key == 'a') {
        bird.up();
        //console.log("SPACE");
    }
}
