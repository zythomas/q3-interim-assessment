

var y 

y = 100 


function setup(){
    createCanvas(600,400)
}
function draw(){
    background(54);
    fill(242, 7, 7);
    var x = 0;
    ellipse(x ,y,100,100);
    x = x+50;
    ellipse(x ,y,100,100);
     x = x+50;
    ellipse(x ,y,100,100);
     x = x+50;
    ellipse(x ,y,100,100);
     x = x+50;
    fill(105,39,100);
    rect(150,10,400,30);
    
    if(mouseIsPressed){
        background(250,0,50);
    }
    var size = [10, 20, 40, 80, 160];
    for(var i = 0; i < size.length ; i++){
        ellipse((i+1)*100, 300, size[i], size [i]);
    }
}

