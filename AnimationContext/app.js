let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// For One Circle

// let x = Math.random() * canvas.width;
// let y = Math.random() * canvas.height;
// let dx = (Math.random() - 0.5);
// let dy = (Math.random() - 0.5);
// let radius = 20;

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   c.beginPath();
//   c.arc(x, y, radius, 0, Math.PI * 2, false);
//   c.fillStyle = "yellow";
//   c.fill();

//   if (x + radius > canvas.width || x - radius < 0) {
//     dx = -dx;
//   }

//   if (y + radius > canvas.height || y - radius < 0) {
//     dy = -dy;
//   }

//   x += dx;
//   y += dy;
// }

// animate();

// For Multiple Circles

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = `#A27B5C`;
    c.fill();
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

let circleArray = [];

for (let i = 0; i < 300; i++) {
  let radius = 30;
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
