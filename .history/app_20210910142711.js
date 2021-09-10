const colors = ['yellow', 'blue', 'green', 'red', 'violet']
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 50,
  y: 0,
  vx: 0,
  vy: 4,
  radius: 25,
  color: getRandomColor(),
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};
function clear() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

function draw() {
    clear();
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        // ball.vy = -ball.vy;
        
    }
    // if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    //     ball.vx = -ball.vx;
    // }

    raf = window.requestAnimationFrame(draw);
  }


  ball.draw();