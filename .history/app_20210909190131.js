const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function draw() {
    var canvas = document.getElementById('canvas').getContext('2d');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
      circle.fillStyle = getRandomColor()
      ctx.fill(circle);
    }
  }
