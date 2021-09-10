const colors = ['yellow', 'blue', 'green', 'red', 'violet']
let array = []
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (let x = 50; x < 500; x = x + 80) {
        for (let y = 50; y < 500; y = y + 80) {
            ctx.beginPath();
            let color = getRandomColor()
            ctx.fillStyle = color;
            ctx.arc(x, y, 30, 0, Math.PI * 2, true);
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

window.onclick = function (e) {
    m.x = e.clientX;
    m.y = e.clientY;
    console.log(m)
    console.log(array)
}


function anim() {
    requestAnimationFrame(anim);
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, cn.width, cn.height);
    

}