function setup(){
    var canvas = createCanvas(640, 480)
    canvas.position(150, 150)
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 230, 150, 220, 200)
    fill("#FF0000")
    stroke("#FF0000")
    circle(50, 50, 100)
    circle(590, 430, 100)
    circle(590, 50, 100)
    circle(50, 430, 100)
    fill("#FFA500")
    stroke("#FFA500")
    rect(90, 25, 460, 50) 
    rect(90, 400, 460, 50) 
    rect(25, 95, 50, 290) 
    rect(565, 95, 50, 290) 
}

function take_snapshot(){
    save("dddd.png")
}