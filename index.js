const rows = 16;
const cols = 16;
const container = document.getElementById("container");

for (let i = 0; i <= cols; i++ ) {
    const col = document.createElement("div");

    col.style.width  = "5vw";             
    col.style.height = "auto";            
    col.style.border = "1px solid black"; 
    col.style.display = "flex";
    col.style.flexDirection = "column";  

    console.log(`added col number ${i}`);
    for (let j = 0; j <= rows; j++) {
        const row = document.createElement("div");
        row.style.width  = "auto";             
        row.style.height = "5vh";            
        row.style.border = "1px solid black"; 
        row.style.display = "flex";
        row.style.flexDirection = "row"; 
        col.appendChild(row);
        console.log(`added row number ${j}`);
    }
    container.appendChild(col);
    console.log('added row');
}