const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    
        ctx.fillStyle = getRandomColor();
        // ctx.beginPath();
        ctx.arc(20,10,10,10,Math.PI*2,true);
        ctx.fill();
      
  }