
let gridSize = 16;



const container = document.getElementById("container");

const newGrid = document.getElementById("gridCreation");


newGrid.addEventListener("click", () => {
    gridSize = prompt("Enter grid Size (1-100):", "16");
    if (gridSize > 1 || gridSize < 100) {
        container.replaceChildren();
        createGrid(gridSize);
    }
    else {
        alert("Grid creation invalid. Grid needs to be between 1-100");
        return null;
    }


})

createGrid(16);

// Creates the Grid
function createGrid(gridSize) {
    

    for (let i = 0; i <= gridSize; i++ ) {        
        const col = document.createElement("div");
        col.style.width  = `${90/gridSize}vw`;             
        col.style.height = "auto";            
        col.style.display = "flex";
        col.style.flexDirection = "column";

        console.log(`added col number ${i}`);
        for (let j = 0; j <= gridSize; j++) {
            const row = document.createElement("div");
            row.style.width  = "auto";             
            row.style.height = `${90/gridSize}vh`;            
            row.style.display = "flex";
            row.style.flexDirection = "row";
            row.addEventListener("mouseenter", () => {row.classList.add("painted")});
            col.appendChild(row);
            
            console.log(`added row number ${j}`);
        }
        container.appendChild(col);
        console.log('added row');
    }
}