let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth / 1.1;
canvas.height = window.innerHeight / 1.1;

let c = canvas.getContext("2d");

window.addEventListener("mousemove", function () {
//   console.log('moving...');
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y,this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "#DEBACE";
    c.strokeStyle = "#7F669D";
    c.fill();
    c.stroke();
  };
  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let circleArray = []

for(let i=0 ; i< 10;i++) {
    let radius = 20;
    let x = Math.random() * canvas.width
    let y = Math.random()* canvas.height
    let dx = Math.random() - 0.5
    let dy = Math.random() - 0.5
    circleArray.push(new Circle(x,y,dx,dy,radius))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight)
    for(let i=0; i< circleArray.length; i++) {
        circleArray[i].update()
    }
}

animate()