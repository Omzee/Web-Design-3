var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rectanges
c.fillStyle = 'rgba(0, 255, 0, 1)'
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 255, 1)'
c.fillRect(300, 300, 100, 100);

// Circle / Arc
for (var i = 0; i < 5; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var red = Math.random() * 255;
    var green = Math.random() * 255;
    var blue = Math.random() * 255;

    c.beginPath();
    c.arc(x, y, 80, 0, 2 * Math.PI);
    // c.strokeStyle = rgb(red, green, blue);
    c.stroke();
};

// Lines
c.beginPath();
c.moveTo(100, 100);
c.lineTo(300, 300);
c.lineTo(520, 200);
c.strokeStyle = "#fa34a5"
c.stroke();

// Gradient
var grd = c.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

c.fillStyle = grd;
c.fillRect(10, 10, 150, 80);

// Text
c.font = "20px Arial";
c.fillStyle = 'red'
c.fillText("HELLO", 120, 150);

c.font = "20px Arial";
c.fillStyle = 'orange';
c.fillText("WORLD", 320, 350);

// Animation
var x = 200;
function animate() {
    requestAnimationFrame(animate);
    
    c.beginPath();
    c.arc(x, 200, 40, 0, 2 * Math.PI);
    c.strokeStyle = 'blue';
    c.stroke();

    c.font = "20px Arial";
c.fillStyle = 'white';
c.fillText("                OH MAN I AM NOT GOOD WITH COMPUTER SAFIOULLINE PLZ TO HELP OH JEEZ OH NO THIS IS BAD HOW DO I STOP IT", 200, 200);

    x += 1;
}

animate();
console.log(canvas);