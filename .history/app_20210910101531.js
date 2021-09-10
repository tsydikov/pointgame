const colors = ['yellow', 'blue', 'green', 'red', 'violet']
// var scor = 0;

let score = 0
document.getElementById("score").innerHTML = score;
let array = []
let circleArray = []
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
}
function drawLine(x1,y1,x2,y2,color) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.moveTo(x2,y2);
    ctx.lineTo(x1,y1);
    ctx.closePath();
    ctx.stroke();
}

const m = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

window.onmousedown = function (e) {
    m.x = e.clientX - (innerWidth / 2 - WIDTH / 2);
    m.y = e.clientY - (innerHeight / 2 - HEIGHT / 2);
    pressCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
    circleArray.push(pressCircle)
    // console.log(pressCircle);

    function onMouseMove(e) {
        m.x = e.pageX - (innerWidth / 2 - WIDTH / 2);
        m.y = e.pageY - (innerHeight / 2 - HEIGHT / 2);
        let pointCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
        // console.log(pressCircle.x,pointCircle.x);
        if (((pressCircle.x+step) === pointCircle.x) || ((pressCircle.x-step) === pointCircle.x) ||((pressCircle.y-step) === pointCircle.y) || ((pressCircle.y+step) === pointCircle.y)) {
            
            if(pressCircle.color === pointCircle.color) {
                circleArray.push(pressCircle)
                drawLine(pressCircle.x,pressCircle.y,pointCircle.x,pointCircle.y,pressCircle.color)
                pressCircle = pointCircle
                console.log('done');
                score++
                document.getElementById("score").innerHTML = score;
            }
            // console.log(circleArray);
        }
    }

    // (3) перемещать по экрану
    document.addEventListener('mousemove', onMouseMove);

    window.onmouseup = function () {
        console.log('end',score);
        document.removeEventListener('mousemove', onMouseMove);
        window.onmouseup = null;
        console.log(circleArray);
        circleArray = []
        pressCircle = []
        array=[]
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        draw()
    };

}


