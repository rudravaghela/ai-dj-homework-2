function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    }
    
    function draw(){
    image(video,0,0,500,500);
    }
    
    function preload(){
    song = loadSound("song1.mp3");
    song2 = loadSound("song2.mp3")
    }
    
    song = "";
    song2 = "";
    
    function play(){
    song.play();
    }
    
    function pause(){
        song.pause();
    }