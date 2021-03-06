'use strict';

const fs = require('fs');
const Transform = require('./lib/transform');
const Transformer = require('./lib/transformCheck');
const regex = /(.bmp)$/g;

//quokka test 

//bitmap class
class Bitmap{
    // constructor(filepath){
    //     this.filepath = filepath;
    // }

    parse(buffer){
        // this. buffer = buffer;
        this.type = buffer.toString('utf-8', 0, 2);
        // this.size = buffer.readInt32LE(2);
        this.offset = buffer.readInt32LE(10);
        // this.headerSize = buffer.readInt32LE(14);
        // this.width = buffer.readInt32LE(18);
        // this.height = buffer.readInt32LE(22);
        // this.bitsPerPixel = buffer.readInt16LE(28);
        // this.colorArray = buffer.slice(54, this.offset);
        // this.pixelArray = buffer.slice(1078);
    }
}

const writeNewFile = (inputFile, transformation) => {

    fs.writeFile(`./assets/${transformation}.bmp`, inputFile, (err) => {
        if(err){
             throw err;
        }
    });
};

//file read
const readFile = (file, transformation) => {
    // testing if file is a .bmp
    if(!regex.test(`${file}`)) {
        return 'Not a .bmp file';
    } else{
        fs.readFile(file, function (err, data) {
            if (err) throw err;

            //create parseable file
            let newBitmap = new Bitmap(data);

            //parse
            newBitmap.parse(data);

            //create constructor from parsed color array
            let colorArray = data.slice(54, newBitmap.offset);
            let transformConstructor = new Transform(colorArray);

            //transform based on input string
            Transformer(transformation, transformConstructor);

            writeNewFile(data, transformation);
        });
    }

};

//gets arguments from console input
const [file, transformation] = process.argv.slice(2);

//reads file based on console input
readFile(file, transformation);

module.exports = readFile;
