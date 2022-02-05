canvas = document.getElementById("ca");
ctx = canvas.getContext("2d");

backgroundimage = "download.jfif";
roverimage  = "download.jfif";
roverx = 10;
rovery = 10;
roverwidth = 100;
roverheight = 90;

function add(){
    backgroundpic = new Image();
    backgroundpic.onload = uploadbackground;
    backgroundpic.src = backgroundimage;

    roverpic = new Image ();
    roverpic.onload = uploadrover;
    roverpic.src=roverimage;
} 

function uploadbackground(){
ctx.drawImage(backgroundpic,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(roverpic,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",kd);

function kd(e){
    kp = e.keyCode;
    console.log (kp);

    if(kp == 37){
     left();
    }

    if(kp == 38){
     up();
    }

    if(kp == 39){
      right();
    }

    if(kp  == 40){
      down();
    }
}

function left(){
if(roverx >=0){
roverx = roverx-10;
uploadbackground();
uploadrover();

}
}

function up(){
if(rovery >=0){
rovery = rovery-10;
uploadbackground();
uploadrover();
}
}

function right(){
if(roverx <=700){
roverx = roverx+10;
uploadbackground();
uploadrover();
}
}

function down(){
  if(rovery <=500){
   rovery = rovery+10;
   uploadbackground();
   uploadrover();
  }
}