var colorBox1 = document.getElementById('cb1');
var colorBox2 = document.getElementById('cb2');
var colorBox3 = document.getElementById('cb3');
var colorBox4 = document.getElementById('cb4');
var colorBox5 = document.getElementById('cb5');
var colorBoxSection = document.querySelector('.color-box-section');
var colorBoxes = [colorBox1, colorBox2, colorBox3, colorBox4, colorBox5];
var hexcode1 = document.querySelector('#hexcode1');
var hexcode2 = document.querySelector('#hexcode2');
var hexcode3 = document.querySelector('#hexcode3');
var hexcode4 = document.querySelector('#hexcode4');
var hexcode5 = document.querySelector('#hexcode5');
var hexcodeArray = [hexcode1, hexcode2, hexcode3, hexcode4, hexcode5];
var lock1 = document.getElementById('lock1');
var lock2 = document.getElementById('lock2');
var lock3 = document.getElementById('lock3');
var lock4 = document.getElementById('lock4');
var lock5 = document.getElementById('lock5');
var lockArray = [lock1, lock2, lock3, lock4, lock5];
var newPaletteButton = document.querySelector('.new-palette-button');
var savePaletteButton = document.querySelector('.save-palette-button');
var palettesDisplay = document.querySelector('.palettes-display');
var palette1 = document.querySelector('#palette1');
var palette2 = document.querySelector('#palette2');
var palette3 = document.querySelector('#palette3');
var palette4 = document.querySelector('#palette4');
var palette5 = document.querySelector('#palette5');
var palette6 = document.querySelector('#palette6');
var palette7 = document.querySelector('#palette7');
var palette8 = document.querySelector('#palette8');
var savedPalettesSection = [palette1, palette2, palette3, palette4, palette5, palette6, palette7, palette8];


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
    // displayColorOnLoad() {
    //     this.colors = []
    //     for (var i = 0; i < 5; i++) {
    //         var colorCopy = new Color()
    //         colorCopy.hexcode = newHexcode.randomizeHexcode();
    //         this.colors.push(colorCopy);
    //         hexcodeArray[i].innerText = this.colors[i].hexcode;
    //         colorBoxes[i].style.backgroundColor = this.colors[i].hexcode;
    //     }
    // }
    generateNewColors() {
        var oldArray = this.colors
        this.colors = []
        for (var i = 0; i < 5; i++) {
            if (oldArray.length == 0) {
                var colorCopy = new Color()
            colorCopy.hexcode = newHexcode.randomizeHexcode();
            this.colors.push(colorCopy);
            hexcodeArray[i].innerText = this.colors[i].hexcode;
            colorBoxes[i].style.backgroundColor = this.colors[i].hexcode;
            } else {
            if (oldArray[i].locked == true) {
                this.colors.push(oldArray[i]);
            } else {
            var colorCopy = new Color()
            colorCopy.hexcode = newHexcode.randomizeHexcode();
            this.colors.push(colorCopy);
            hexcodeArray[i].innerText = this.colors[i].hexcode;
            colorBoxes[i].style.backgroundColor = this.colors[i].hexcode;
            }
        }
    }
}
};

var displayedPalette = new Palette();
function newColorData() {
  displayedPalette.generateNewColors()
}

var savedPalettes = []
function loadPalette() {
    displayedPalette.generateNewColors()
}

function deletePalette(event) {
  if(event.target.classList.contains('trash-button')) {
    console.log("Hello")

  }
}
window.addEventListener('load', loadPalette);
// window.addEventListener('load', displayedPalette.displayColorOnLoad());
newPaletteButton.addEventListener('click', newColorData);
savePaletteButton.addEventListener('click', savePalette);
colorBoxSection.addEventListener('click', lockColor);
palettesDisplay.addEventListener('click', deletePalette);

function deletePalette(event) {
  for (var i = 0; i < savedPalettesSection.length; i++) {
    if (savedPalettesSection[i] === event.target.closest('div div')) {
      savedPalettes.splice(i, 1);
      displayHTML();
      console.log(savedPalettes)
    }
  }
}


function savePalette() {
  var paletteCopy = new Palette(displayedPalette.colors)
  savedPalettes.push(paletteCopy)
  displayHTML()
}
// this is the saved palette display area
function displayHTML() {
    for(var i = 0; i < savedPalettesSection.length; i++) {
      savedPalettesSection[i].innerHTML = '';
      if (savedPalettes[i] === undefined) {
        return newColorData();
      }
        for(var j = 0; j < savedPalettes[i].colors.length; j++) {
          savedPalettesSection[i].innerHTML += `<ul style="background-color: ${savedPalettes[i].colors[j].hexcode}"></ul>`
        }
    savedPalettesSection[i].innerHTML += '<btn class="trash-button"><img src="https://img.icons8.com/external-prettycons-solid-prettycons/200/external-trash-essentials-prettycons-solid-prettycons.png"></btn>'
    }
    newColorData();
}


function lockColor(event) {
  console.log(event.target)
    for (var i = 0; i < lockArray.length; i++) {
        if (event.target === colorBoxes[i]) {
          if (displayedPalette.colors[i].locked === true) {
            displayedPalette.colors[i].locked = false;
            lockArray[i].innerHTML = `<img src="https://img.icons8.com/external-prettycons-solid-prettycons/200/external-unlock-essentials-prettycons-solid-prettycons.png">`;
          }  else {
            displayedPalette.colors[i].locked = true;
            lockArray[i].innerHTML = `<img src="https://img.icons8.com/external-prettycons-solid-prettycons/200/external-padlock-essentials-prettycons-solid-prettycons.png">`
          }
        }
    }

}

/* if (this.locked === true) {
    //return locked image
 } else if (this.locked === false) {
    //return unlocked image
 }*/

 //    console.log(event.target)
