

var colorBox1 = document.getElementById('cb1');
var colorBox2 = document.getElementById('cb2');
var colorBox3 = document.getElementById('cb3');
var colorBox4 = document.getElementById('cb4');
var colorBox5 = document.getElementById('cb5');
var colorBoxes = [colorBox1, colorBox2, colorBox3, colorBox4, colorBox5]
var newPaletteButton = document.querySelector('.new-palette-button')
var savePaletteButton = document.querySelector('.save-palette-button')



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
};

var newHexcode = new Color();


class Palette {
    constructor(savedPaletteArray) {
    this.colors = savedPaletteArray || []
    this.paletteID = Date.now();
    }
    generateNewColors() {
        this.colors = []
        for (var i = 0; i < 5; i++) {
            // if (!newHexcode[i].locked) {
            this.colors.push(newHexcode.randomizeHexcode());
            colorBoxes[i].style.backgroundColor = this.colors[i]
            // }
        }
    }
};

var displayedPalette = new Palette();
function newColorData() {
  displayedPalette.generateNewColors()
}

var savedPalettes = []

window.addEventListener('load', displayedPalette.generateNewColors());
newPaletteButton.addEventListener('click', newColorData);
savePaletteButton.addEventListener('click', savePalette)



function savePalette() {
  var paletteCopy = new Palette(displayedPalette.colors)
  savedPalettes.push(paletteCopy)
//   displayHTML() {

//   }
}

// function displayHTML()


//We need a function that will push saved palettes into a Saved Palettes Array.  We need to somehow have the data model iterate through the Saved Palettes Array to display them on the DOM. displayedPalette.color

/*function lockColor() {
 if (this.locked === true) {
    //return locked image
 } else if (this.locked === false) {
    //return unlocked image
 }
} */
