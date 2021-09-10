const colors = ['yellow', 'blue', 'green', 'red', 'violet']
let array = []
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (let i = 50; i < 500; i = i + 80) {
        for (let j = 50; j < 500; j = j + 80) {
            ctx.beginPath();
            let color = getRandomColor()
            ctx.fillStyle = color;
            ctx.arc(i, j, 30, 0, Math.PI * 2, true);
            ctx.fill();
            array.push( i, j, color )
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