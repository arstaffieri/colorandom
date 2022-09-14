var hexcode = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

class Color {
    constructor(hexcode) {
        this.hexcode = hexcode;
    }
    randomizeHexcode() {
        for (var i = 0; i < 6; i++) {
            this.hexcode += Math.floor(Math.random() * hexcode.length)
            console.log(this.hexcode)
        }
    }
}

var color1 = new Color();

// goal:
// make a random assortment of strings
// organize strings within an array
//         make a variable to store array 

// each string should have six characters (in total) from:
// A-F
// 0-9