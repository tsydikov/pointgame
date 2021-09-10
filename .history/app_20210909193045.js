const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// function draw() {
//     var canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     var circle = new Path2D();
//     circle.moveTo(125, 35);
//     circle.arc(100, 35, 25, 0, 2 * Math.PI);
//     ctx.fill(circle);
//   }
// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     ctx.fillStyle = 'red';
//     ctx.beginPath();
//     ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
//     ctx.fill();
// }
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' +
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
  }