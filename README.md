![CF](http://i.imgur.com/7v5ASc8.png) Lab Bitmap-Transformer
==============================================

## LAB 05
[![Build Status]

### Author: Nikki Carthen, Erik Johnson, Jesse Atay, Karl Polintan, Rick Bellamy

### Links and Resources
* [repo](https://github.com/Nikki1686/Bitmap-Transformer)
* [travis](https://www.travis-ci.com/Nikki1686/Bitmap-Transformer)

### Modules
#### `readFile`
##### Input -> CLI string arguments for bitmap file path and transformation/Output -> transformed image

###### `readFile(string file path, string transformation) -> bitmap image to assets folder`

#### `transform`
##### Input -> bitmap color array/Output -> color array with changed values

###### `negative() -> inverts values to create a negative image`
###### `pinkHighlights() -> alters array to convert single 0 black pixels to pink`
###### `allBlack() -> changes entire image to black`
###### `allWhite()) -> changes entire image to white`
###### `neon1() -> changes array values to neon colors`
###### `neon2() -> changes array values to neon colors`

#### `transformer`
##### Input -> string CLI transformation argument and color array/Output -> calls transformation function on color array

###### `transformer(string transformation, color array) -> parses string input to lower case, calls transformation on color array`


#### Tests
* To run tests, please use the `npm run test` command.

* Assertions

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

#### UML
![UML](uml.png)
