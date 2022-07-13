canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

mars_nasa_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];

random_number=Math.floor(Math.random()*4);
rover_height=90;
rover_width=100;

rover_image="rover.png";

background_image=mars_nasa_array[random_number];

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='37'){
        left();
        console.log("left");
    } 
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}

function up(){
    if (rover_y >=0)
    {
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y <=500)
    {
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x >=0)
    {
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x <=700)
    {
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}