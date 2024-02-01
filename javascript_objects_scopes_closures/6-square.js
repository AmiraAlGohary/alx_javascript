const Rectangle = require('./4-rectangle.js');
//5-square

class Square extends Rectangle {
    constructor(size){
        super(size, size);
        this.size = size;
    }
    
    charPrint(c) {
        if (typeof c === 'undefined') {
            for (let i=0; i <this.size; i++) {
                for (let j=0; j <this.size; j++) {
                    process.stdout.write('X');
                }            
                process.stdout.write('\n');
            }
        }
        
        else {
            for (let i=0; i <this.size; i++) {
                for (let j=0; j <this.size; j++) {
                    process.stdout.write(c);
                }            
                process.stdout.write('\n');
            }
        }
    }
}


module.exports = Square