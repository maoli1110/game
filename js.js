var bird;
var pipes = [];
var scorebox=document.getElementById('score')
var start = false;
var pressed = false;
var time = 1000*30;
var mouseX
var mouseY
var end = false



function setup() {
    bg = loadImage('./bg.jpeg');
    newBird = loadImage('./brid.GIF');
    newApple = loadImage('./apple.png');
    box1 = loadImage('./box1.png')
    box2 = loadImage('./box2.png')
    box3 = loadImage('./box3.png')
    box4 = loadImage('./box4.png')
    box5 = loadImage('./box5.png')


    createCanvas(1000, 480);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    // console.log('draw')
    clear()
    if(!start) return;
    if(!pressed) {
        noLoop();
    }
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



    // if(start) {
    //     if(!end){
    //         console.log('49++')

    //         setTimeout(() => {
    //             end = true
    //             start = false
    //             $('.sortList-wrap').show()
    //             $('main').hide()
    //             console.log('52++')
    //         }, time);
    //     }
    // }
}

function keyPressed() {
    if (key == 'a') {
        bird.up();
        //console.log("SPACE");
    }
}

function mousePressed() {
    if(mouseX>=800 && mouseX<=980 && mouseY>=400 && mouseY<=480){
           start = true
           pressed = true
           $('#mark').hide()
    }

    setTimeout(() => {
        end = true
        start = false
        writeScore()
        $('.sortList-wrap').show()
        $('main').hide()
    }, time);
}

function writeScore() {
    var currentScore = $('#score').val();
    var scoreListString = sessionStorage.getItem('score')?sessionStorage.getItem('score'):'';
    if(currentScore !== '0') {
        if(scoreListString) {
            sessionStorage.setItem('score', scoreListString + '-' + $('#score').val())
        } else {
            sessionStorage.setItem('score', currentScore)
        }
    }
    $('.sortList').attr('src','./sortList/index.html')
}

function backGame() {
    start = false
    pressed = false
    window.location.reload();
}

function scoreList() {
    $('main').hide()
    $('.sortList-wrap').show()
}

$(document).click(
    function(event){
       event = event || window.event;
       mouseX = event.offsetX || event.originalEvent.layerX;
       mouseY= event.offsetY || event.originalEvent.layerY;
       $('#infor').css('display','block');
    }
);
