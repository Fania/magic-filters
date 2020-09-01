// https://generativeartistry.com/tutorials/joy-division/


const canvas = document.querySelector('#paper');
const context = canvas.getContext('2d');

const size = window.innerWidth - 100;
canvas.width = size;
canvas.height = window.innerHeight - 100;
context.lineWidth = 2;

const step = 10;
const lines = [];

// Create the lines
for(let i = step; i <= size - step; i += step) {
  let line = [];
  for(let j = step; j <= size - step; j+= step) {
    const distanceToCenter = Math.abs(j - size / 2);
    const variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
    const random = Math.random() * variance / 2 * -1;
    // const random = Math.random() * 10;
    const point = {x: j, y: i + random};
    line.push(point);
  } 
  lines.push(line);
}

// Do the drawing
for(var i = 5; i < lines.length; i++) {
// for(let i = 0; i < lines.length; i++) {

  context.beginPath();
  context.moveTo(lines[i][0].x, lines[i][0].y);
  
  // for(let j = 0; j < lines[i].length; j++) {
  //   context.lineTo(lines[i][j].x, lines[i][j].y);
  // }

  for(var j = 0; j < lines[i].length - 2; j++) {
    let xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
    let yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
    context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
  }

  context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);

  context.stroke();
  
  context.save();
  context.globalCompositeOperation = 'destination-out';
  context.fill();
  context.restore();
}



