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
  field.style.color = "#E06C75";
  field.innerHTML = "Error: RGB value must be between 0 to 255.";
  hexField.appendChild(field);
}

function checkRange(num) {
  if (num >= 0 && num <= 255) {
    return true;
  } else {
    return false;
  }
}

function readRgbValue() {
  let r = document.querySelector('#rgb-red').value;
  let g = document.querySelector('#rgb-green').value;
  let b = document.querySelector('#rgb-blue').value;
  if (r,g,b === "") {
    displayError();
  }
  if (checkRange(Number(r))) {
     if (checkRange(Number(g))) {
       if (checkRange(Number(b))) {
           return rgbToHex(r, g, b);
       }
    }
  }
  displayError();
}

function rgbToHex(red, green, blue) {
    var out = '#';
    for (var i = 0; i < 3; ++i) {
        var n = typeof arguments[i] == 'number' ? arguments[i] : parseInt(arguments[i]);

        if (isNaN(n) || n < 0 || n > 255) {
            return false;
        }
        out += (n < 16 ? '0' : '') + n.toString(16);
    }
    return out;
}
