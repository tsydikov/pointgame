const colors = ['yellow', 'blue', 'green', 'red', 'violet']
let array = []
let pointArray = []
let pressCircle = []
let summary = 0
const radius = 30
const step = 80
const HEIGHT = 500
const WIDTH = 500
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
var ctx = document.getElementById('canvas').getContext('2d');

function draw() {

    for (let x = 50; x < 500; x = x + step) {
        for (let y = 50; y < 500; y = y + step) {
            ctx.beginPath();
            let color = getRandomColor()
            ctx.fillStyle = color;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
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
    m.x = e.clientX - (innerWidth / 2 - WIDTH / 2);
    m.y = e.clientY - (innerHeight / 2 - HEIGHT / 2);
    pressCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
    console.log(pressCircle);
    // console.log(pointCircle);
    // anim(pointCircle, e.pageX-WIDTH, e.pageY)

    // function anim(pointCircle, X, Y) {
    //     // console.log(X);
    //     requestAnimationFrame(anim);
    //     ctx.beginPath(X, Y);
    //     ctx.strokeStyle = pointCircle.color;
    //     ctx.lineWidth = 5
    //     ctx.moveTo(X,Y);
    //     ctx.lineTo(pointCircle.x, (pointCircle.y + radius));
    //     ctx.closePath();
    //     ctx.stroke();
    // }
    function onMouseMove(e) {
        m.x = e.pageX - (innerWidth / 2 - WIDTH / 2);
        m.y = e.pageY - (innerHeight / 2 - HEIGHT / 2);
        let pointCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
        console.log(pressCircle.x);
        if (((pressCircle.x+step) === pointCircle.x) || ((pressCircle.x-step) === pointCircle.x) ||((pressCircle.y-step) === pointCircle.y) || ((pressCircle.y+step) === pointCircle.y)) {
            console.log('done');
        }
        console.log(pointCircle.x);

        // console.log(e.pageX, e.pageY,pointCircle);
        // anim(pointCircle, e.pageX, e.pageY)
    }

    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);

    window.onmouseup = function () {
        console.log('end');
        document.removeEventListener('mousemove', onMouseMove);
        window.onmouseup = null;
        pressCircle = []
        draw()
    };

}


