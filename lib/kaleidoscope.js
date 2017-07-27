const Canvas = require('canvas');

module.exports = class Kaleidoscope {
  constructor(image, size, options = {}) {
    this._options = this._parseOptions(options);
    this._image = image;
    this._radius = size / 2;
    this._canvas = new Canvas(size, size, this._options.format);
    this._context = this._canvas.getContext('2d');
    this._context.fillStyle = this._context.createPattern(this._image, 'repeat');
  }

  _parseOptions(options) {
    return {
      sliceNum: options.sliceNum || 12,
      format: options.format || 'png',
      offsetRotation: options.offsetRotation || 0,
      offsetScale: options.offsetScale || 1.0,
      offsetX: options.offsetX || 0,
      offsetY: options.offsetY || 0
    };
  }

  generate() {
    const step = Math.PI * 2 / this._options.sliceNum;
    const centerX = this._image.width / 2;
    const range = Array.from(Array(this._options.sliceNum).keys());
    const context = this._canvas.getContext('2d');
    const scale = this._radius / Math.min(this._image.width, this._image.height);

    range.forEach(i => {
      this._context.save();
      this._context.translate(this._radius, this._radius);
      this._context.rotate(i * step);

      this._context.beginPath();
      this._context.moveTo(0, 0);
      // To fill gap, use bit wider arc
      this._context.arc(0, 0, this._radius, step * -0.53, step * 0.53);
      this._context.closePath();

      this._context.rotate(Math.PI / 2);
      this._context.scale(scale, scale);
      this._context.scale([-1, 1][i % 2], 1);
      this._context.translate(this._options.offsetX - centerX, this._options.offsetY);
      this._context.rotate(this._options.offsetRotation);
      this._context.scale(this._options.offsetScale, this._options.offsetScale);

      this._context.fill();
      this._context.restore();
    });

    return this._canvas.toBuffer();
  }
};

