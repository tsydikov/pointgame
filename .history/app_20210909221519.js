const colors = ['yellow', 'blue', 'green', 'red', 'violet']

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//         ctx.beginPath();
//         for (let i = 50; i < 500; i=i+80) {
//             // ctx.restore()
//             // ctx.translate(105,0);
//             ctx.fillStyle = getRandomColor();
//             ctx.arc(i,450,30,0,Math.PI*2,true);
//             ctx.fill();
            
//         }
//   }

// var canvas = document.getElementById('canvas');
// var cc = document.getElementsByTagName("canvas")[0];
// c = cc.getContext("2d");

// function food() {
//     this.x = 0, this.y = 0, this.b = 10, this.w = this.b, this.h = this.b, this.color = getRandomColor(), this.renew = function () {
//         this.x = Math.floor(Math.random() * (w - 200) + 10), this.y = Math.floor(Math.random() * (h - 200) + 30), this.color = getRandomColor()
//     }, this.renew(), this.put = (() => {
//         c.fillStyle = this.color, c.arc(this.x, this.y, this.b - 5, 0, 2 * Math.PI), c.fill(), c.beginPath(), c.arc(this.x, this.y, this.b - 5, 0, Math.PI), c.strokeStyle = "green", c.lineWidth = 10, c.stroke(), c.beginPath(), c.lineWidth = 1
//     })
// }
// function init() {
//     cc.height = h, cc.width = w, c.fillRect(0, 0, w, innerHeight);
//     for (var t = 0; t < 10; t++) fa.push(new food);
//     s = new snake(w / 2, h / 2, 400, 4, 4), anima()
// }

// function anima() {
//     c.fillStyle = "rgba(0,0,0,0.11)", c.fillRect(0, 0, cc.width, cc.height), fa.forEach(t => t.put()), s.draw(), document.getElementById("time").innerText = tmz(), setTimeout(() => {
//         requestAnimationFrame(anima)
//     }, fw)
// }

// init();


