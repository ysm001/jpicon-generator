const Canvas = require('canvas');
const Image = Canvas.Image;
const fs = require('fs');

module.exports = filePath => {
  const image = new Image();
  image.src = fs.readFileSync(filePath);
  return image;
};

