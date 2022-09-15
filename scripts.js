/*function displayNewColors() {
    document.getElementById('cb1').style.backgroundColor = this.colors[1];
}*/

window.onload = function() {

}


var hexcode = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class Color {
   constructor() {
    this.locked = false;
    }
    randomizeHexcode() {
        this.hexcode = '#';
        for (var i = 0; i < 6; i++) {
            this.hexcode += hexcode[Math.floor(Math.random() * hexcode.length)];
        }
        return this.hexcode
    }
}

var newHexcode = new Color()


class Palette {
    constructor() {
    this.colors = []
    this.paletteID = Date.now();
    }
    generateNewColors() {
        this.colors = []
        for (var i = 0; i < 5; i++) {
            this.colors.push(newHexcode.randomizeHexcode());
        } 
        document.getElementById('cb1').style.backgroundColor = this.colors[1];
  //  return this.displayNewColors
    } 
}


var palette1 = new Palette();

/*Note: on page load, a new instance of Palette will be declared. This Palette will be used until a user decides to save that Palette. Then, a new instance will be created and used until that palette is saved. Continue ad infinitum.
It should have 5 Colors
It should have a unique ID
It should be able to replace the Colors with new Colors
It should be able to lock Colors
It should only replace unlocked Colors*/



// goal:
// make a random assortment of strings
// organize strings within an array
//         make a variable to store array 

// each string should have six characters (in total) from:
// A-F
// 0-9