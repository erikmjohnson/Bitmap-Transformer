'use strict';

// test transformations

class Transform{
    constructor(colorArray){
        this.colorArray = colorArray;
    }

    negative(){
        let reverseCounter = this.colorArray.length - 1;
        for(let i = 0; i < this.colorArray.length; i++){
            this.colorArray[i] = reverseCounter;
            reverseCounter --;
        }
    };

    pinkHighlights(){
        for(let i = 0; i < this.colorArray.length; i++){
            if(this.colorArray[i] === 0){
                this.colorArray[i] = 255;
            }
        }
    };

    allBlack(){
        for(let i = 0; i < this.colorArray.length; i++){
            this.colorArray[i] = 0;
        }
    };

    allWhite(){
        for(let i = 0; i < this.colorArray.length; i++){
            this.colorArray[i] = 255;
        }
    };

    neon1(){

        for(let i = 0; i < this.colorArray.length; i+=3){
            this.colorArray[i] = 0;
            this.colorArray[i + 1] = 191;
            this.colorArray[i + 2] = 255;
        }
    };

    neon2(){

        for(let i = 0; i < this.colorArray.length; i+=4){
            this.colorArray[i] = 255;
            this.colorArray[i + 1] = 0;
            this.colorArray[i + 2] = 191;
            this.colorArray[i + 3] = 0;
        }
    }
}

module.exports = Transform;