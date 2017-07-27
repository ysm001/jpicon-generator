const hexToRgb = require('hex-rgb');
const Canvas = require('canvas');
const Image = Canvas.Image;

const THRESHOLD = 180;
module.exports = (image, palette) => {
  const canvas = new Canvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const color = hexToRgb(palette.color.replace('#', ''));
  const bgcolor = hexToRgb(palette.bgcolor.replace('#', ''));

  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      const index = (y * 4) * imageData.width + x * 4;
      const gray = (imageData.data[index] + imageData.data[index + 1] + imageData.data[index + 2]) / 3;
      const rgb = gray < THRESHOLD ? color : bgcolor;

      imageData.data[index] = rgb[0];
      imageData.data[index + 1] = rgb[1];
      imageData.data[index + 2] = rgb[2];
    }
  }

  ctx.putImageData(imageData, 0, 0, 0, 0, image.width, image.height);

  const coloredImage = new Image();
  coloredImage.src = canvas.toBuffer();
  return coloredImage;
};
