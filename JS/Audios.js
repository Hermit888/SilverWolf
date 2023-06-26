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
    function a(){
        var pic = document.getElementById("a1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("a1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("meet_cn");
    
    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_2(){
    function a(){
        var pic = document.getElementById("b1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("b1");
        pic.src = "../images/声音图标-removebg.png";
    }
    
    var audio = document.getElementById("greet_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_3(){
    function a(){
        var pic = document.getElementById("c1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("c1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("bye_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_4(){
    function a(){
        var pic = document.getElementById("d1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("d1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("name_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_5(){
    function a(){
        var pic = document.getElementById("e1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("e1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("universe_cn");
    
    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_6(){
    function a(){
        var pic = document.getElementById("f1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("f1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("prometheus_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_7(){
    function a(){
        var pic = document.getElementById("g1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("g1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("hobby_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_8(){
    function a(){
        var pic = document.getElementById("h1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("h1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("trouble_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_9(){
    function a(){
        var pic = document.getElementById("i1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("i1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("share_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_10(){
    function a(){
        var pic = document.getElementById("j1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("j1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("knowledge_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_11(){
    function a(){
        var pic = document.getElementById("k1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("k1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("kafka_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay1_12(){
    function a(){
        var pic = document.getElementById("l1");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("l1");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("blade_cn");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}


// 日文音频点击事件
function audioPlay2_1(){
    function a(){
        var pic = document.getElementById("a2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("a2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("meet_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_2(){
    function a(){
        var pic = document.getElementById("b2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("b2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("greet_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_3(){
    function a(){
        var pic = document.getElementById("c2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("c2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("bye_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_4(){
    function a(){
        var pic = document.getElementById("d2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("d2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("name_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_5(){
    function a(){
        var pic = document.getElementById("e2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("e2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("universe_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_6(){
    function a(){
        var pic = document.getElementById("f2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("f2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("prometheus_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_7(){
    function a(){
        var pic = document.getElementById("g2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("g2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("hobby_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_8(){
    function a(){
        var pic = document.getElementById("h2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("h2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("trouble_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_9(){
    function a(){
        var pic = document.getElementById("i2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("i2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("share_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_10(){
    function a(){
        var pic = document.getElementById("j2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("j2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("knowledge_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_11(){
    function a(){
        var pic = document.getElementById("k2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("k2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("kafka_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}

function audioPlay2_12(){
    function a(){
        var pic = document.getElementById("l2");
        pic.src = "../images/音频图标gif.gif";
    }

    function b(){
        var pic = document.getElementById("l2");
        pic.src = "../images/声音图标-removebg.png";
    }

    var audio = document.getElementById("blade_jp");

    if (audio.paused){
        audio.play();
        a();
    }else{
        audio.pause();
        audio.currentTime = 0;
        b();
    }
    audio.addEventListener("ended", function(){
        b();
    }, false);

    audio.addEventListener("pause", function(){
        b();
    }, false);
}
