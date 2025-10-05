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