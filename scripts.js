
const canvas = document.getElementById('paper');
const ctx = canvas.getContext('2d');


const img = new Image();
img.src = 'order5s.png';

img.addEventListener('load', () => {

  // original image
  ctx.drawImage(img, 0, 0, 1000, 800);

  // get image data
  const imageData = ctx.getImageData(0, 0, 1000, 800);
  console.log(imageData);

  for (let i = 0; i < imageData.data.length; i += 4) {


    // Modify pixel data
    imageData.data[i + 0] = invert(imageData.data[i + 0]); // R
    imageData.data[i + 1] = invert(imageData.data[i + 1]); // G
    imageData.data[i + 2] = invert(imageData.data[i + 2]); // B
    // imageData.data[i + 3] = invert(imageData.data[i + 3]); // A
  }

  ctx.putImageData(imageData, 0, 0);

});


function invert(pxl) {
  return 255 - pxl;
};


function rand() {
  return Math.floor(Math.random() * Math.floor(255));
};