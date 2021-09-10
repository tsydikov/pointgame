const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        for (let i = 50; i < 500; i=i+80) {
            for (let j = 50; j < 500; j=j+80) {
                ctx.beginPath();
                ctx.fillStyle = getRandomColor();
                ctx.arc(i,j,30,0,Math.PI*2,true);
                ctx.fill();  
            }
            // restore()
            // ctx.restore()
            // ctx.translate(105,0);
            }
          }
