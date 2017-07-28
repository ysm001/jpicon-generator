# JPIcon

JPIcon is a Node.js library/CLI which generates an japanese-style identicon image.

## Examples
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-23.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-46.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-55.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-109.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-203.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-266.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-285.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/images/seed-288.png)

[More examples](https://github.com/ysm001/jpicon-generator/tree/master/examples/images)

## CLI
### Install
`npm install -g jpicon`

### Usage
```
Usage: jpicon [options]

Options:
  --size:              size of icon. (default: 64)
  --seed:              seed of random numbers to generate icon. (default: random value)
  --slice-num:         slice number of circle. (default: 12)
  --offset-rotation:   offset of icon's rotation. (default: random value)
  --offset-scale:      offset of icon's scale. (default: random value)
  --offset-x:          offset of icon's x position. (default: random value)
  --offset-y:          offset of icon's y position. (default: random value)
  --shape:             shape of icon (square | circle) (default: circle)
  --palette:           palette name (default: random value)
  --output:            file path to output. (default: ./output.png)
```

## JS API
### Install
`npm install jpicon`

### Usage
```
const JPICON = require('jpicon');
const fs = require('fs');
const options = {
  size: 64,
  seed: parseInt(Math.random() * 10000),
  sliceNum: 12,
  offsetRotation: 0,
  offsetScale: 0,
  offsetX: 0,
  offsetY: 0,
  palette: 'pattern1'

};

// JPICON.generate returns icon data and params used to generate icon
const ret = JPICON.generate(options);
fs.writeFileSync('./icon.png', ret.icon);
console.log(ret.params);
```

## Datasource
Textures used for generating icons are got from http://eps.crest-japan.net/
