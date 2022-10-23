//important constants and variables
const gridContainer = document.querySelector('.gridContainer');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
const colorBtn = document.querySelector('#colorBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraser = document.querySelector('#eraser');
const slider = document.querySelector('.slider');
let sizeValue = document.querySelector('.sizeValue');
const settings = document.querySelector(".settings");
const reset = document.querySelector('#reset');



//Creates a default grid size 16x16
function defaultGrid() {
    setupGrid(16);
}

//setup a square grid using size as the input
function setupGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        gridElement.addEventListener("mousedown", changeColor);
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);

    }
}

//change color function for event listener
let mouseDown = false; //global variable to require both mouse down and mouse over to change color
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return; // mouse has to be held down to change color
        //e.target.style.background = `${color}`;
    if (colorBtn.classList.contains("active")) {
        e.target.style.background = `${color}`;
    } else if (rainbowBtn.classList.contains("active")) {
        let randomColor = makeRandomColor();
        e.target.style.background = `${randomColor}`;
    } else if (eraser.classList.contains("active")) {
        e.target.removeAttribute("style");
    };
};

// Add eventlistener to colorPicker saves as variable color
let color = '#333333'

function watchColorPicker(e) {
    color = e.target.value;
    console.log(color);
};

const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener("input", watchColorPicker, false);

//rainbow -------------------------------
//generate random colors
let makeRandomColor = () => {
    const randomColorNum = Math.floor(Math.random()*16777215).toString(16);
    return ("#" + randomColorNum)
}

//toggle buttons
function toggleButton(e) {
    let activeBtn = document.querySelector('.active');
    activeBtn.classList.toggle('active');
    e.target.classList.toggle('active');
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', toggleButton)
});

// slider display
slider.addEventListener("input", function(e) {
    size = document.getElementById("myRange").value;
    removeAllChildNodes(gridContainer);
    setupGrid(size);
    sizeValue.textContent = `${size} x ${size}`;
});

// replace new grid
let gridElements = document.querySelectorAll(".gridElement");
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//reset button
reset.addEventListener("click", () => {
    removeAllChildNodes(gridContainer);
    setupGrid(size);
})

//defaultGrid();
let size = 16;
setupGrid(size);