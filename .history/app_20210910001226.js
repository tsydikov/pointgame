const colors = ['yellow', 'blue', 'green', 'red', 'violet']
let array = []
const radius = 30
const HEIGHT = 500
const WIDTH = 500
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
var ctx = document.getElementById('canvas').getContext('2d');

function draw() {
    
    for (let x = 50; x < 500; x = x + 80) {
        for (let y = 50; y < 500; y = y + 80) {
            ctx.beginPath();
            let color = getRandomColor()
            ctx.fillStyle = color;
            ctx.arc(x, (y+radius), radius, 0, Math.PI * 2, true);
            ctx.fill();
            array.push({ x, y, color })
        }
    }
    // return console.log(ctx.canvas)
}

const m = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
// console.log(m);

window.onmousedown = function (e) {
    m.x = e.clientX-(innerWidth / 2 - WIDTH /2 );
    m.y = e.clientY-(innerHeight / 2 - HEIGHT / 2);
    // console.log(m)
    // console.log(array)
    let pointCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
    console.log(pointCircle);
    console.log(e)
    anim(pointCircle, e.pageX, e.pageY)
}


function anim(pointCircle,X,Y) {
    requestAnimationFrame(anim);
    ctx.beginPath(X,Y);
    ctx.fillStyle = pointCircle.color;
    ctx.moveTo();
    ctx.lineTo(pointCircle.x,(pointCircle.y+radius));
    // ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
}