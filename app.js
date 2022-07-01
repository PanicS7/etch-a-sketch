/*
1. Create 16x16 grid of square divs
2. Add hover to div squares (black and white)
3. Add button asking for the number of squares per side for the new grid.
Bonus: Add random rgb hover effect
*/

// Grid Container - paint screen
const grid = document.getElementById("grid");
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

    grid.append(div);
  }

  for (let i = 1; i < size*size; i++) {
    createDiv();
  }
}
// Default is 5x5 grid
createGrid(5);

// Handle selected style
const buttons = document.getElementsByClassName("button");
function selectedButton(elem) {
  [...buttons].map(button => {
    button.classList.remove("selected");
  });

  elem.classList.add("selected");
}

/* EVENT LISTENERS */ 
// Color Picker
const colorPicker = document.getElementById("color");
colorPicker.addEventListener("change", () => {
  console.log(colorPicker.value);
});

// Color Mode
const colorMode = document.getElementById("colorMode");
colorMode.addEventListener("click", () => {
  console.log("color selected: " + colorPicker.value);

  selectedButton(colorMode);
});

// Rainbow Mode
const rainbowMode = document.getElementById("rainbowMode");
rainbowMode.addEventListener("click", () => {
  console.log("rainbow mode");

  selectedButton(rainbowMode);
});

// Eraser 
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
  console.log("erase");

  selectedButton(eraser);
});

// Clear grid
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  console.log("clear grid");

  selectedButton(clear);
  clearGrid();
});
function clearGrid() {
  grid.innerHTML = "";
}

// Grid size changer
const gridSize = document.getElementById("gridSize");
const gridSizeInput = document.getElementById("gridSizeInput");
gridSizeInput.addEventListener("change", () => {
  gridSize.innerText = `${gridSizeInput.value} x ${gridSizeInput.value}`;

  clearGrid();
  createGrid(gridSizeInput.value);
});



