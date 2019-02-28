'use strict';

const readFile = require('../index');

describe ('testing Bitmap functionality', () => {
  test('testing if bmp', () => {
    expect(readFile('/assets/section_1.jpeg, negative')).toEqual('Not a .bmp file');
  });
});