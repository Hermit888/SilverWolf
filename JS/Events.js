// change BG
function changeBg(){
    var img = document.getElementById("bg");
    img.style.backgroundImage = "url('../images/background.jpg')";
}

// audio for lighting bomb
function lighting(){
    var audio = document.getElementById("lighting");
    audio.play();
}

//delet bomb img
function deletBomb(){
    var img = document.getElementById("bomb");
    img.remove();
}

// show Boom img
function showBoom(){
    var boom = document.getElementById("boom");
    boom.style.opacity = 1;
}

// play boom audio
function boom(){
    var audio = document.getElementById("boomSound");
    audio.play();
}

// delet boom img
function deletBoom(){
    var img = document.getElementById("boom");
    img.remove();
}

// play BG music
function bgMusic(){
    var music = document.getElementById("bgMusic");
    music.play();
}

// show avatar and texts
function hack(){
    var hacking = document.getElementById("hack");
    hacking.style.opacity = 1;
}

//show the fake back
function fake(){
    var fake = document.getElementById("fakeBack");
    fake.style.opacity = 1;
}

// change the postion of fake return
function place(){
    var div = document.getElementById("fakeBack");
    var x = Math.random();
    var y = Math.random();

    if (x <= 0.9){
        xposition = x*100;
    }else{
        xposition = (x - 0.1)*100;
    }
    if (y <= 0.6){
        yposition = y*100;
    }else{
        yposition = (y - 0.4)*100;
    }

    div.style.left = xposition + "%";
    div.style.top = yposition + "%";
}

function main(){
    // before hacking
    lighting();
    setTimeout(deletBomb, 4000);
    setTimeout(showBoom, 5000);
    setTimeout(boom, 5000);
    setTimeout(changeBg, 5000);
    setTimeout(deletBoom, 7200);

    //hacking
    setTimeout(hack,7500);
    setTimeout(bgMusic, 7500);

    //fake
    setTimeout(fake, 10000);

    // condition for showing the truth
    var count = 0;
    var obj = document.getElementById("fakeBack");
    obj.addEventListener("click", function(){
        count++;
        if (count == 5){
            var truth = document.getElementById("truth");
            truth.style.opacity = 1;
        }
    });
}