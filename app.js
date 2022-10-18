//important constants and variables
const gridContainer = document.querySelector('.gridContainer');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

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
function changeColor(e) {
    if (e.type === "mouseover" && e.type !== "mousedown") return;
        e.target.style.background = 'black';
        console.log(e.type)
    
}

defaultGrid();
