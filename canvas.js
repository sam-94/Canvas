window.onload = function(){
    init();
    window.addEventListener('resize', init,false);
}
function init(){
    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

var colorArray = [
   '#ffaa33',
   '#99ffaa',
   '#00ff00',
   '#fff',
   '#ff1100',

];

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function() {
     c.beginPath();
     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
     c.fillStyle = this.color;
     c.fill();
    }
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
           this.dy = -this.dy;
        }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
}

 var circleArray = [];

for (var i=0; i < 200; i++) {
     var x = Math.random() * innerWidth;
     var y = Math.random() * innerHeight;
     var dx = (Math.random() - 0.5) * 8;
     var dy = (Math.random() - 0.5) * 8;
     var radius = Math.random() * 10 + 1;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
   for (var i=0; i < circleArray.length; i++) {
    circleArray[i].update();
   }

}
animate();
}