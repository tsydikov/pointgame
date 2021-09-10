const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        // ctx.fillStyle = getRandomColor();
        // ctx.arc(30,270,30,0,Math.PI*2,true);
        ctx.fillStyle = getRandomColor();
        ctx.fillArc(90,30,30,0,Math.PI*2,true);
        
      
  }