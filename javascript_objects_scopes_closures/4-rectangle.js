
// Create an instance method called rotate() that exchanges the width and the height of the rectangle
// Create an instance method called double() that multiples the width and the height of the rectangle by 2


class Rectangle {
    constructor(w, h) {
        if (w>0 && h>0 && Number.isInteger(w) && Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        }
    }    
    print() {
        for (let i=0; i <this.height; i++) {
            for (let j=0; j <this.width; j++) {
                process.stdout.write('X');
            }            
            process.stdout.write('\n');
        }
    }

    rotate() {
        let temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double() {
        let doubledWidth = (this.width)*2
        this.width = doubledWidth
        let doubledHeight = (this.height)*2
        this.height = doubledHeight
    }
}


const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();

console.log('Double:');
r1.double();
r1.print();

console.log('Rotate:');
r1.rotate();
r1.print();


module.exports = Rectangle
