

var colorBox1 = document.getElementById('cb1');
var colorBox2 = document.getElementById('cb2');
var colorBox3 = document.getElementById('cb3');
var colorBox4 = document.getElementById('cb4');
var colorBox5 = document.getElementById('cb5');
var colorBoxes = [colorBox1, colorBox2, colorBox3, colorBox4, colorBox5]
var hexcode1 = document.querySelector('#hexcode1')
var hexcode2 = document.querySelector('#hexcode2')
var hexcode3 = document.querySelector('#hexcode3')
var hexcode4 = document.querySelector('#hexcode4')
var hexcode5 = document.querySelector('#hexcode5')
var hexcodeArray = [hexcode1, hexcode2, hexcode3, hexcode4, hexcode5]
var newPaletteButton = document.querySelector('.new-palette-button')
var savePaletteButton = document.querySelector('.save-palette-button')
var palettesDisplay = document.querySelector('.palettes-display')
var palette1 = document.querySelector('#palette1')
var palette2 = document.querySelector('#palette2')
var palette3 = document.querySelector('#palette3')
var palette4 = document.querySelector('#palette4')
var palette5 = document.querySelector('#palette5')
var palette6 = document.querySelector('#palette6')
var palette7 = document.querySelector('#palette7')
var palette8 = document.querySelector('#palette8')
var palette9 = document.querySelector('#palette9')
var palette10 = document.querySelector('#palette10')
var palette11 = document.querySelector('#palette11')
var palette12 = document.querySelector('#palette12')
var palette13 = document.querySelector('#palette13')
var palette14 = document.querySelector('#palette14')
var palette15 = document.querySelector('#palette15')
var savedPalettesSection = [palette1, palette2, palette3, palette4, palette5, palette6, palette7, palette8, palette9, palette10, palette11, palette12, palette13, palette14, palette15]

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
            hexcodeArray[i].innerText = this.colors[i]
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

// var displaySavedHTML = []

function savePalette() {
  var paletteCopy = new Palette(displayedPalette.colors)
  savedPalettes.push(paletteCopy)
  displayHTML()
}

function displayHTML() {
    for(var i = 0; i < savedPalettes.length; i++) {
      savedPalettesSection[i].innerHTML = '';
        for(var j = 0; j < savedPalettes[i].colors.length; j++) {
          savedPalettesSection[i].innerHTML += `<ul style="background-color: ${savedPalettes[i].colors[j]}"></ul>`
        }
    savedPalettesSection[i].innerHTML += '<btn class="trash-button"><img src="https://img.icons8.com/external-prettycons-solid-prettycons/200/external-trash-essentials-prettycons-solid-prettycons.png"></btn>'
    }
    newColorData();
}


//We need a function that will push saved palettes into a Saved Palettes Array.  We need to somehow have the data model iterate through the Saved Palettes Array to display them on the DOM. displayedPalette.color

/*function lockColor() {
 if (this.locked === true) {
    //return locked image
 } else if (this.locked === false) {
    //return unlocked image
 }
} */
