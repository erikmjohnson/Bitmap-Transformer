'use strict';

const readFile = require('../index');
const Transform = require('../lib/transform');
const image = '../assets/baldy.bmp';
let x = readFile(image, 'allBlack');

describe ('testing Bitmap functionality', () => {
  test('testing if bmp', () => {
    expect(readFile('../assets/section_1.jpeg', 'negative')).toEqual('Not a .bmp file');
  });
  test('testing Color Array', () => {
    // const check = readFile(image, 'allBlack');
    let testColorArray = readFile('../assets/baldy.bmp', 'allBlack');
    console.log(testColorArray);
    expect(testColorArray[0]).toEqual(0);
  });
  test('testing negative transform', () => {
    const testArray = [1,2,3,5];
    const test = new Transform(testArray);
    test.negative();
    expect(testArray).toEqual([3,2,1,0]);
  })
  // further tests on if class/objects work
});