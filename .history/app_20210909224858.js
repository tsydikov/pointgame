const colors = ['yellow', 'blue', 'green', 'red', 'violet']
let array = []
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
        for (let i = 50; i < 500; i=i+80) {
            for (let j = 50; j < 500; j=j+80) {
                ctx.beginPath();
                ctx.fillStyle = getRandomColor();
                ctx.arc(i,j,30,0,Math.PI*2,true);
                ctx.fill();
    
                array.push({i,j})
            }
            // restore()
            // ctx.restore()
            // ctx.translate(105,0);
            }
            return console.log(array)
}


window.onclick(()=>console.log(array))