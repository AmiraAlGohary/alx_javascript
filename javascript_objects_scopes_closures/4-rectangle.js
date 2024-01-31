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

module.exports = Rectangle
