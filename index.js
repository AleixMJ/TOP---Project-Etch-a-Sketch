
let gridSize = 16;



const container = document.getElementById("container");

const newGrid = document.getElementById("gridCreation");

const painted = document.getElementsByClassName("painted");


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

        for (let j = 0; j <= gridSize; j++) {
            const row = document.createElement("div");
            row.style.width  = "auto";             
            row.style.height = `${90/gridSize}vh`;            
            row.style.display = "flex";
            row.style.flexDirection = "row";
            const r = random255();
            const g = random255();
            const b = random255();    
            let opacity = 0;
            row.addEventListener("mouseenter", () => {               
                row.style.backgroundColor = `rgb(${r} ${g} ${b} / ${opacity} )`;
                opacity = Math.min (opacity + 0.1, 1);            
            });

            col.appendChild(row);           
        }
        container.appendChild(col);
    }
}

function random255() {
    return Math.floor(Math.random() * 256);
}