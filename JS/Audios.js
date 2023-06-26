//只播放一个，暂停其他音频
var audios = document.getElementsByTagName("audio");
function pauseAll(){
    var self = this;
    [].forEach.call(audios, function(i){
        i != self && i.pause();
        i.currentTime= 0;
    })
}

[].forEach.call(audios, function(i){
    i.addEventListener("play", pauseAll.bind(i));
})


// 中文音频点击事件
function audioPlay1_1(){
    var audio = document.getElementById("meet_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_2(){
    var audio = document.getElementById("greet_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_3(){
    var audio = document.getElementById("bye_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_4(){
    var audio = document.getElementById("name_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_5(){
    var audio = document.getElementById("universe_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_6(){
    var audio = document.getElementById("prometheus_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_7(){
    var audio = document.getElementById("hobby_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_8(){
    var audio = document.getElementById("trouble_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_9(){
    var audio = document.getElementById("share_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_10(){
    var audio = document.getElementById("knowledge_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_11(){
    var audio = document.getElementById("kafka_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay1_12(){
    var audio = document.getElementById("blade_cn");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}


// 日文音频点击事件
function audioPlay2_1(){
    var audio = document.getElementById("meet_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_2(){
    var audio = document.getElementById("greet_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_3(){
    var audio = document.getElementById("bye_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_4(){
    var audio = document.getElementById("name_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_5(){
    var audio = document.getElementById("universe_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_6(){
    var audio = document.getElementById("prometheus_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_7(){
    var audio = document.getElementById("hobby_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_8(){
    var audio = document.getElementById("trouble_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_9(){
    var audio = document.getElementById("share_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_10(){
    var audio = document.getElementById("knowledge_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_11(){
    var audio = document.getElementById("kafka_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function audioPlay2_12(){
    var audio = document.getElementById("blade_jp");

    if (audio.paused){
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}