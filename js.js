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
    // newApple = loadImage('./apple.png');
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
        $('#infor').css('display','block');
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
    var scoreListString =localStorage.getItem('score')?localStorage.getItem('score'):'';
    if(currentScore !== '0') {
        if(scoreListString) {
           localStorage.setItem('score', scoreListString + '-' + $('#score').val())
        } else {
           localStorage.setItem('score', currentScore)
        }
    }
    getscoreList();
    $('#sortList').show()
}

function backGame() {
    start = false
    pressed = false
    window.location.reload();
}

function scoreList() {
    $('main').hide()
    // $('.sortList-wrap').show()
}

$(document).click(
    function(event){
       event = event || window.event;
       mouseX = event.offsetX || event.originalEvent.layerX;
       mouseY= event.offsetY || event.originalEvent.layerY;
    }
);

function getscoreList() {
    var scoreString =localStorage.getItem('score')?localStorage.getItem('score'):''+'0-0-0';
    var scoreList;
    if(scoreString) {
        scoreList = unique(scoreString.split('-').sort(sortNumber));
    }
    $('.index1').text(scoreList[0])
    $('.index2').text(scoreList[1])
    $('.index3').text(scoreList[2])
    $('.topScore').text(scoreList[0])
    $('.bottomScore').text(scoreList[0])
}


function sortNumber(a,b){//降序
    return b - a
}

function unique(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i])
        }
    }
    return newArr;
}   
