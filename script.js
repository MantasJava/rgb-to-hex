let button = document.querySelector("input[type='button']");
button.addEventListener('click', displayHex);

function displayHex() {
  let hexField = document.querySelector("#converted-value");
  hexField.innerHTML = "";
  let field = document.createElement("h3");
  let hexValue = readRgbValue();
  if (!(hexValue === undefined) && hexValue.length === 7) {
  field.style.color = "#E5C07B";
  field.innerHTML = "Hex value: " + hexValue;
  hexField.appendChild(field);
  }
  console.log(hexValue.length);
}

function displayError() {
  let hexField = document.querySelector("#converted-value");
  hexField.innerHTML = "";
  let field = document.createElement("h3");
  field.style.color = "#FFF";
  field.innerHTML = "Error: RGB value must be between 0 to 255.";
  hexField.appendChild(field);
}

function readRgbValue() {
  let r = document.querySelector('#rgb-red').value;
  let g = document.querySelector('#rgb-green').value;
  let b = document.querySelector('#rgb-blue').value;
  if (r,g,b === "") {
    displayError();
  }
  let intR = Number(r);
  let intG = Number(g);
  let intB = Number(b);

  if (intR >= 0) {
     if (intR <= 255) {
       if (intG >= 0) {
         if (intG <= 255) {
           if (intB >= 0) {
             if (intB <= 255) {
               return rgbToHex(r, g, b);
             }
           }
         }
       }
    }
  }
  displayError();
}

let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('');
