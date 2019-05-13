var canvas = document.getElementById('Game');
var context = canvas.getContext('2d');

var ballX = canvas.width/2;
var ballY = canvas.width/2;
var ballColor = 'rgb(255, 30, 30)'

var ballRadius = 50;

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

function animate(){
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);

    //draw the ball
    context.beginPath();
    context.fillStyle =  ballColor;
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.fill();

    if(ballX+ballRadius >= canvas.width || ballX-ballRadius <=0){
        moveRight = !moveRight;
    }

    if(ballY+ballRadius >= canvas.height || ballY-ballRadius <=0){
        moveDown = !moveDown;
    }

    if(moveRight){
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }

    if(moveDown){
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('click', function(event){
    console.log(event);

    if(ballX-ballRadius < event.clientX && event.clientX < ballX+ballRadius && ballY-ballRadius < event.clientY && event.clientY < ballY+ballRadius){
        console.log('CLICK!!!!');
    
        speedX = 0;
        speedY = 0;
    }
})