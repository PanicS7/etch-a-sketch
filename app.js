/*
1. Create 16x16 grid of square divs
2. Add hover to div squares (black and white)
3. Add button asking for the number of squares per side for the new grid.
Bonus: Add random rgb hover effect
*/

// Elements
const grid = document.getElementById("grid");
const buttons = document.getElementsByClassName("button");
const rainbowMode = document.getElementById("rainbowMode");
const colorPicker = document.getElementById("color");
const colorMode = document.getElementById("colorMode");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const gridSize = document.getElementById("gridSize");
const gridSizeInput = document.getElementById("gridSizeInput");

let color = colorPicker.value;

// Grid Container - paint screen
function createGrid(size) {
  createDiv();
  function createDiv() {
    const div = document.createElement("div");
    const gridSize = grid.offsetWidth;
    const divSize = gridSize / size;
    // Create columns and rows in grid
    let columns = "auto";
    for (let i = 2; i <= size; i++) {
      columns += " auto";
    }
    grid.style.gridTemplateColumns = columns;

    div.classList.add("gridBox");
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";

    // Draw
    div.addEventListener("click", () => {
      // Color Mode
      if([...colorMode.classList].includes("selected") || [...eraser.classList].includes("selected")) {
        selectedButton(colorMode);
        div.style.backgroundColor = color;
      }
      // Rainbow Mode
      else {
        console.log("rainbowMode");
      }
    });

    // Erase on right-click
    div.addEventListener("contextmenu", () => {
      event.preventDefault();
      div.style.backgroundColor = "#fff";
      selectedButton(eraser);
    })
    
    grid.append(div);
  }

  for (let i = 1; i < size*size; i++) {
    createDiv();
  }
}
// Default is 5x5 grid
createGrid(5);

// Handle selected style
function selectedButton(elem) {
  [...buttons].map(button => {
    button.classList.remove("selected");
  });

  elem.classList.add("selected");
}

/* EVENT LISTENERS */ 
// Color Picker
colorPicker.addEventListener("change", () => {
  selectedButton(colorMode);
  color = colorPicker.value;
});

// Color Mode
colorMode.addEventListener("click", () => {
  selectedButton(colorMode);
  color = colorPicker.value;
});

// Rainbow Mode
rainbowMode.addEventListener("click", () => {
  console.log("rainbow mode");

  selectedButton(rainbowMode);
});

// Eraser 
eraser.addEventListener("click", () => {
  color = "#fff";
  selectedButton(eraser);
});

// Clear grid
clear.addEventListener("click", () => {
  clearGrid();
  createGrid(gridSizeInput.value);
});
function clearGrid() {
  grid.innerHTML = "";
}

// Grid size changer
gridSizeInput.addEventListener("change", () => {
  gridSize.innerText = `${gridSizeInput.value} x ${gridSizeInput.value}`;

  clearGrid();
  createGrid(gridSizeInput.value);
});



