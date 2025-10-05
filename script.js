const DEFAULT_GRID_SIZE = 16;
const AVAILABLE_SPACE = 500;

const gridContainer = document.querySelector("#gridContainer");
let isSpaceBarPressed = false;

function setupGlobalListeners() {
    document.addEventListener("keydown", (event) => {
        if (event.key === ' ') {
            isSpaceBarPressed = true;
        }
    });

    document.addEventListener("keyup", (event) => {
        if (event.key === ' ') {
            isSpaceBarPressed = false;
        }
    });
}

function setupGridListeners() {
    gridContainer.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("grid-cell"))
            e.target.classList.add("painted");
    });

    gridContainer.addEventListener("mousemove", (e) => {
        if (isSpaceBarPressed && e.target.classList.contains("grid-cell"))
            e.target.classList.add("painted");
    });
}

function createCell(cellSize) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    return cell;
}

function generateGrid(gridSize) {
    gridContainer.innerHTML = "";
    const cellSize = AVAILABLE_SPACE / gridSize;
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = createCell(cellSize);
        gridContainer.appendChild(cell);
    }
}

function getAllCells() {
    return document.querySelectorAll(".grid-cell");
}

function setNewGridSize() {
    const input = prompt("Enter the new grid size (1 - 100):");

    if (input === null) return; // Cancel was pressed

    const gridSize = parseInt(input);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    generateGrid(gridSize);
}

const newGridSizeBtn = document.querySelector("#newGridSize");
newGridSizeBtn.addEventListener("click", setNewGridSize);

function clearCanvas() {
    const cells = getAllCells();
    cells.forEach(cell => {
        cell.classList.remove("painted");
    });
}

const clearCanvasBtn = document.querySelector("#clearCanvas");
clearCanvasBtn.addEventListener("click", clearCanvas);

function init() {
    generateGrid(DEFAULT_GRID_SIZE);
    setupGlobalListeners();
    setupGridListeners();
}

init();