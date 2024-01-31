#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w>0 && h>0 && Number.isInteger(w) && Number.isInteger(h)) {
            this.width = w;
            this.height = h;
        }

        else {
            return Rectangle; {
                constructor(); {      
                }
            };
        }
    }    
}

// module.exports = Rectangle

// class Rectangle {
//     constructor(w, h) {
//         this.width = undefined;
//         this.height = undefined;

//         if (w>0 && h>0 && Number.isInteger(w) && Number.isInteger(h)) {
//             this.width = w;
//             this.height = h;
//         }
//         else {
//             return {};
//         }
//     }    
// }


const r1 = new Rectangle(3, -3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);