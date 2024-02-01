const Rectangle = require('./4-rectangle.js');

class Square extends Rectangle {
    constructor(size){
        super(size, size);
        this.size = size;
    }
    
    charPrint(c) {
        if (c === 'C')
            for (let i=0; i <this.size; i++) {
                for (let j=0; j <this.size; j++) {
                    process.stdout.write('C');
                }            
                process.stdout.write('\n');
            }
        else if (typeof c === 'undefined')
            for (let i=0; i <this.size; i++) {
                for (let j=0; j <this.size; j++) {
                    process.stdout.write('X');
                }            
                process.stdout.write('\n');
        }
    }
}


module.exports = Square