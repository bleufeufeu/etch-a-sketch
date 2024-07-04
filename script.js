const container = document.querySelector("#content");

function randomColour() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

function createGrid(size) {
    const squareSize = 480 / size;
    for (i = 0; i < size; i++) {
        let row = document.createElement("div");
        for (j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener("mouseover", (event) => {
                colour = randomColour();
                event.target.style.backgroundColor = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;
                
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}


//createGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let num;
    while (true) {
        num = parseInt(prompt("Enter the dimension (max: 100) for the square grid:"));
        if (Number.isInteger(num) && num <= 100 && num > 0) {
            container.innerHTML = "";
            createGrid(num);
            break;
        }
        else {
            alert("Invalid dimension (must be between 1 to 100)!");
            break;
        }
    }
});
