# JPIcon Generator

This is a tool to generate randomized japanese style icon.

## Examples
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-2.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-3.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-12.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-6.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-9.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-1234567.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-12345678.png)
![](https://github.com/ysm001/jpicon-generator/blob/master/examples/seed-123456789.png)

## CLI
### Install
`npm install -g jpicon`

### Usage
```
Usage: jpicon [options]

Options:
  --size:              size of icon. (default: 64)
  --seed:              seed of random numbers to generate icon. (default: random number)
  --slice-num:         slice number of circle
  --offset-rotation:   offset of icon's rotation
  --offset-scale:      offset of icon's scale
  --offset-x:          offset of icon's x position
  --offset-y:          offset of icon's y position
  --palette:           palette name
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