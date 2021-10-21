const initialCellCount = 16;
const containerSize = 512;

let body = document.querySelector('body');

function draw(e) {
    e.target.style.backgroundColor = 'red';
}

function resetBoard() {
    let size = document.querySelector(".slider").value;
    body.removeChild(document.querySelector('.container'));
    createBoard(size);
}

function updateSliderVal(e) {
    let p = document.querySelector("#slider-value");
    p.textContent = e.target.value;
}

// reset buttons
let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetBoard);

let cellCountSlider = document.querySelector(".slider");
cellCountSlider.addEventListener('input', updateSliderVal);

function createBoard(cellCount) {
    // Create big container to house all other divs
    let container = document.createElement('div');
    container.classList.add('container');
    let cellSize = `${containerSize / cellCount}px`;

    console.log(cellSize);

    for (i=0; i < cellCount; i++) {
        // create a container that represents a row
        let row = document.createElement('div');
        row.classList.add('row');

        // inside each row, puth another 16 divs
        for (j=0; j < cellCount; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', draw)
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            row.appendChild(cell);
        }

        container.appendChild(row);
    }

    // put the container in body
    body.appendChild(container);
}

createBoard(initialCellCount);

let p = document.querySelector("#slider-value");
p.textContent = initialCellCount;