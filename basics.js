

const canvas1 = document.getElementById('paper1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('paper2');
const ctx2 = canvas2.getContext('2d');
const canvas3 = document.getElementById('paper3');
const ctx3 = canvas3.getContext('2d');
const canvas4 = document.getElementById('paper4');
const ctx4 = canvas4.getContext('2d');
const canvas5 = document.getElementById('paper5');
const ctx5 = canvas5.getContext('2d');
const canvas6 = document.getElementById('paper6');
const ctx6 = canvas6.getContext('2d');
const canvas7 = document.getElementById('paper7');
const ctx7 = canvas7.getContext('2d');

ctx1.fillStyle = 'rgb(200, 0, 0)';
ctx1.fillRect(10, 10, 50, 50);
ctx1.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx1.fillRect(30, 30, 50, 50);


let img = new Image();
img.src = 'order5s.png';
// DEFAULT
img.addEventListener('load', () => {
  ctx2.drawImage(img, 0, 0);
});
// SCALING
img.addEventListener('load', () => {
  ctx3.drawImage(img, 0, 0, 100, 100);
});

// TILING
img.addEventListener('load', () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx4.drawImage(img, j * 50, i * 38, 50, 38);
    }
  }
});
// SLICING
// img.onload = () => {
img.addEventListener('load', () => {
  ctx5.drawImage(img, 0, 0, 100, 150, 30, 20, 130, 100);
});



















// // https://www.html5rocks.com/en/tutorials/canvas/imagefilters/


// Filters = {};
// Filters.getPixels = function(img) {
//   var c = this.getCanvas(img.width, img.height);
//   var ctx = c.getContext('2d');
//   ctx.drawImage(img);
//   return ctx.getImageData(0,0,c.width,c.height);
// };

// Filters.getCanvas = function(w,h) {
//   var c = document.createElement('canvas');
//   c.width = w;
//   c.height = h;
//   return c;
// };

// Filters.filterImage = function(filter, image, var_args) {
//   var args = [this.getPixels(image)];
//   for (var i=2; i<arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   return filter.apply(null, args);
// };

// Filters.grayscale = function(pixels, args) {
//   var d = pixels.data;
//   for (var i=0; i<d.length; i+=4) {
//     var r = d[i];
//     var g = d[i+1];
//     var b = d[i+2];
//     // CIE luminance for the RGB
//     // The human eye is bad at seeing red and blue, so we de-emphasize them.
//     var v = 0.2126*r + 0.7152*g + 0.0722*b;
//     d[i] = d[i+1] = d[i+2] = v
//   }
//   return pixels;
// };

// Filters.brightness = function(pixels, adjustment) {
//   var d = pixels.data;
//   for (var i=0; i<d.length; i+=4) {
//     d[i] += adjustment;
//     d[i+1] += adjustment;
//     d[i+2] += adjustment;
//   }
//   return pixels;
// };

// Filters.threshold = function(pixels, threshold) {
//   var d = pixels.data;
//   for (var i=0; i<d.length; i+=4) {
//     var r = d[i];
//     var g = d[i+1];
//     var b = d[i+2];
//     var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
//     d[i] = d[i+1] = d[i+2] = v
//   }
//   return pixels;
// };