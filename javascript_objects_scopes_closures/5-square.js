// import { Rectangle } from './4-rectangle.js';
const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
    constructor(size){
        super();
        this.size = size;
    }
}

module.exports = Square