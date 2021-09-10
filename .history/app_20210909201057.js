const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        for (let i = 30; i > 30; i=i+60) {
            ctx.fillStyle = getRandomColor();
            ctx.arc(i,450,30,0,Math.PI*2,true);
            ctx.fill();
        }
        
      
  }