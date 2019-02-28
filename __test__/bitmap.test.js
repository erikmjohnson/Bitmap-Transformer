'use strict';

const readFile = require('../index');
const image = '../assets/baldy.bmp';
let x = readFile(image, 'allBlack');

describe ('testing Bitmap functionality', () => {
  test('testing if bmp', () => {
    expect(readFile('../assets/section_1.jpeg', 'negative')).toEqual('Not a .bmp file');
  });
  test('testing Color Array', () => {
    // const check = readFile(image, 'allBlack');
    expect(x.colorArray[0]).toEqual(0);
  });
  // further tests on if class/objects work
});