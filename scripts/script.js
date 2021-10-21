function draw(e) {
    e.target.style.backgroundColor = 'red';
}

// Create big container to house all other divs
let container = document.createElement('div');
container.classList.add('container');

for (i=0; i < 16; i++) {
    // create a container that represents a row
    let row = document.createElement('div');
    row.classList.add('row');

    // inside each row, puth another 16 divs
    for (j=0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', draw)
        row.appendChild(cell);
    }

    container.appendChild(row);
}

let body = document.querySelector('body');

// put the container in body
body.appendChild(container);