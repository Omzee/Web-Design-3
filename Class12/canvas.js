var canvas = document.getElementById('Game');
var context = canvas.getContext('2d');

var ballX = canvas.width / 2;
var ballY = canvas.width / 2;
var ballColor = 'rgb(255, 30, 30)'

var ballRadius = 50;

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

var grow = -3;

var goFast = true;

function animate() {
    context.fillStyle = 'rgba(255, 255, 255, 0.6)';
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);

    //draw the ball
    context.beginPath();
    context.fillStyle = ballColor;
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.fill();

    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0) {
        moveRight = !moveRight;
    }

    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        moveDown = !moveDown;
    }

    if (moveRight) {
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }

    if (moveDown) {
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    if (goFast) {
        window.requestAnimationFrame(animate);
    }
    else {
        context.fillStyle = 'rgba(255, 255, 255, 1)';
        context.fillRect(0, 0, canvas.clientWidth, canvas.height);
        RemoveExplosion();
    }
}

animate();

// Full disclosure: my friend from USC helped me write this code that made the explosion dissapear after a while. I don't really understand it entirely.
// BUT I DID EVERYTHING ELSE OK
async function RemoveExplosion()
{
    await new Promise((resolve, reject) => {
                    setTimeout(() => resolve("explosion timeout"), 1250.0)
            });
    document.getElementById("boom").style.display = "none";
}

canvas.addEventListener('click', function (event) {
    console.log(event);

    if (ballX - ballRadius < event.clientX && event.clientX < ballX + ballRadius && ballY - ballRadius < event.clientY && event.clientY < ballY + ballRadius) {
        console.log('CLICK!!!!');
        goFast = false;

        // speedX = 0;
        // speedY = 0;

        let sunglasses = document.getElementById("boom")

        sunglasses.style.display = 'block';

        sunglasses.style.left = (ballX - sunglasses.offsetWidth / 2) + "px";
        sunglasses.style.top = (ballY - sunglasses.offsetHeight / 2) + "px";

        // ballRadius = ballRadius + grow;   
        // console.log(ballRadius);
    }
})