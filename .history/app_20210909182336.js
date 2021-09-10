function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
  
      var circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0, 2 * Math.PI);
  
      ctx.fill(circle);
    }
  }
