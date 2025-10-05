const GRID_RESOLUTION = 16;
const AVAILABLE_SPACE = 500;

function generateGrid() {
    const gridContainer = document.querySelector("#gridContainer");
    const cellSize = AVAILABLE_SPACE/GRID_RESOLUTION;
    for(let i = 0; i < GRID_RESOLUTION**2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        gridContainer.appendChild(cell);
    }
}

generateGrid();

let isSpaceBarPressed = false;

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

const cells = document.querySelectorAll(".grid-cell");
cells.forEach(cell => {
    
    cell.addEventListener("mousedown", () => {
        cell.style.backgroundColor = "#0e1015";
    });

    cell.addEventListener("mousemove", () => {
        if (isSpaceBarPressed) cell.style.backgroundColor = "#0e1015";
    });
});