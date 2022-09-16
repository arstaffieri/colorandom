/*function displayNewColors() {
    document.getElementById('cb1').style.backgroundColor = this.colors[1];
}*/

var colorBox1 = document.getElementById('cb1')
var colorBox2 = document.getElementById('cb2')
var colorBox3 = document.getElementById('cb3')
var colorBox4 = document.getElementById('cb4')
var colorBox5 = document.getElementById('cb5')
var colorBoxes = [colorBox1, colorBox2, colorBox3, colorBox4, colorBox5]

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
    console.log(this.paletteID)
    }
    generateNewColors() {
        this.colors = []
        for (var i = 0; i < 5; i++) {
            if (!newHexcode[i].locked) {
            this.colors.push(newHexcode.randomizeHexcode());
            colorBoxes[i].style.backgroundColor = this.colors[i]
            }
        } 
    }
 //       document.getElementById('cb1').style.backgroundColor = this.colors[0];
  //  return this.displayNewColors
} 

/*function lockColor() {
 if (this.locked === true) {
    //return locked image
 } else if (this.locked === false) {
    //return unlocked image
 }
} */




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