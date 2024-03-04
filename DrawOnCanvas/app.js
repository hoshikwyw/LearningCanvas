let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth / 1.5;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

// Drawing Rectangles

c.fillStyle = "#FAEED1";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "#D2E3C8";
c.fillRect(200, 300, 100, 100);
c.fillStyle = "#FFC5C5";
c.fillRect(300, 500, 100, 100);

// Drawing Lines
c.beginPath(); // begin the path
// c.moveTo(x , y)
c.moveTo(100, 200); // start point
c.lineTo(150, 100); // adding line
c.lineTo(200, 200); // adding second line
c.moveTo(200, 300);
c.lineTo(300, 400);
c.moveTo(400, 500);
c.lineTo(300, 600);
c.moveTo(200, 200);
c.lineTo(250, 200);
c.lineTo(250, 300);
c.moveTo(300, 400);
c.lineTo(350, 400);
c.lineTo(350, 500);
c.strokeStyle = "#B99470"; // giving stroke color
c.stroke(); // adding stroke

// Drawing Arc / Circle

// c.beginPath();
// c.arc(x,y,radius,startAngle,endAngle,counterClockwise)
// c.arc(500, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#4F709C";
// c.stroke();

// drawing multiple circles

for (let i = 0; i < 85; i++) {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;

  // Generate random values for RGB components
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  c.beginPath();
  c.arc(x, y, 5, 0, Math.PI * 2, false);
  c.fillStyle =`rgb(${r},${g},${b})`;
  c.strokeStyle = `rgb(${r},${g},${b})`;
  c.fill();
  c.stroke();
}
