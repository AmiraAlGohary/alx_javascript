// If w or h is equal to 0 or not a positive integer, create an empty object


class Rectangle {
    constructor(w, h) {
        if (w>0 && h>0 && Number.isInteger(w) && Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        }

        else {
            return {};
        }
    }    
}

module.exports = Rectangle