const colors = ['yellow', 'blue', 'green', 'red', 'violet']
function init(){
    window.requestAnimationFrame(draw);
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        for (let i = 50; i < 500; i=i+80) {
            // ctx.restore()
            ctx.translate(105,0);
            ctx.fillStyle = getRandomColor();
            ctx.arc(i,450,30,0,Math.PI*2,true);
            ctx.fill();
        }
  }


