const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        for (let i = 270; i < 30; i=i-30) {
            ctx.fillStyle = getRandomColor();
            ctx.arc(i,30,30,0,Math.PI*2,true);
            ctx.fill();
        }
        
      
  }