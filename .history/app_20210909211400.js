const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//         ctx.beginPath();
//         for (let i = 50; i < 500; i=i+80) {
//             // ctx.restore()
//             // ctx.translate(105,0);
//             ctx.fillStyle = getRandomColor();
//             ctx.arc(i,450,30,0,Math.PI*2,true);
//             ctx.fill();
            
//         }
//   }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 0,
  y: 50,
  vx: 0,
  vy: 2,
  radius: 30,
  color: getRandomColor(),
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    raf = window.requestAnimationFrame(draw);
  }
  canvas.addEventListener('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
  });
  canvas.addEventListener('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
  });
ball.draw();