'use strict';

const readFile = require('../index');
const Transform = require('../lib/transform');
const Transformer = require('../lib/transformCheck');

describe ('testing Bitmap functionality', () => {
  test('testing if bmp', () => {
    expect(readFile('../assets/section_1.jpeg', 'negative')).toEqual('Not a .bmp file');
  });
  test('testing allblack transform', () => {
    const testArray = [1,2,3,5];
    const test = new Transform(testArray);
    Transformer('allblack', test);
    expect(testArray).toEqual([0,0,0,0]);
  });
  test('testing negative transform', () => {
    const testArray = [1,2,3,5];
    const test = new Transform(testArray);
    Transformer('negative', test);
    expect(testArray).toEqual([3,2,1,0]);
  });
  test('testing pinkhighlights transform', () => {
    const testArray = [1,2,3,0];
    const test = new Transform(testArray);
    Transformer('pinkhighlights', test);
    expect(testArray).toEqual([1,2,3,255]);
  });
  test('testing allWhite transform', () => {
    const testArray = [1,2,3,0];
    const test = new Transform(testArray);
    Transformer('allwhite', test);
    expect(testArray).toEqual([255,255,255,255]);
  });
  test('testing neon1 transform', () => {
    const testArray = [1,2,3,0];
    const test = new Transform(testArray);
    Transformer('neon1', test);
    expect(testArray).toEqual([0,191,255,0,191,255]);
  });
  test('testing neon2 transform', () => {
    const testArray = [1,2,3,0];
    const test = new Transform(testArray);
    Transformer('neon2', test);
    expect(testArray).toEqual([255,0,191,0]);
  });
  // further tests on if class/objects work
});