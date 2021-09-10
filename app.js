// обьявление переменных
const colors = ['yellow', 'blue', 'green', 'red', 'violet']
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
const m = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
var ctx = document.getElementById('canvas').getContext('2d');

// функция случайного цвета
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

// отрисока кружков
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

// отрисовка линии 
function drawLine(x1,y1,x2,y2,color) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.moveTo(x2,y2);
    ctx.lineTo(x1,y1);
    ctx.closePath();
    ctx.stroke();
}

// реакция на действия пользователя
window.onmousedown = function (e) {
    m.x = e.clientX - (innerWidth / 2 - WIDTH / 2);
    m.y = e.clientY - (innerHeight / 2 - HEIGHT / 2);
    // при нажатии мыши
    pressCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
    circleArray.push(pressCircle)

    // при движении мыши
    function onMouseMove(e) {
        m.x = e.pageX - (innerWidth / 2 - WIDTH / 2);
        m.y = e.pageY - (innerHeight / 2 - HEIGHT / 2);
        let pointCircle = array.find(item => (Math.abs(item.x - m.x) <= radius * 1.5) && (Math.abs(item.y - m.y) <= radius * 1.5));
        // логика соединения круго
        if (((pressCircle.x+step) === pointCircle.x) || ((pressCircle.x-step) === pointCircle.x) ||((pressCircle.y-step) === pointCircle.y) || ((pressCircle.y+step) === pointCircle.y)) {
            // логика идентификации цвета
            if(pressCircle.color === pointCircle.color) {
                if (circleArray.find(item => item === pointCircle)) {} else {
                    circleArray.push(pointCircle)
                    drawLine(pressCircle.x,pressCircle.y,pointCircle.x,pointCircle.y,pressCircle.color)
                    pressCircle = pointCircle
                    score++
                    // вывод очков
                    document.getElementById("score").innerHTML = score;
                } 
            }  
        }
    }

    // при перемещении по экрану мыши
    document.addEventListener('mousemove', onMouseMove);

    // при отпускании клика завершаем отрисовку, наращиваем результат, обнуляем переменные, отрисовываем круги заново
    window.onmouseup = function () {
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


