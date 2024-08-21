console.log('Hello World');

let mainGrid = document.querySelector(".main-grid");

for (let i =0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","pixel");
    //newDiv.setAttribute("width", "25%");
    //newDiv.setAttribute("aspect-ratio", "1");

    mainGrid.appendChild(newDiv);
}

function changeColor(target){
    target.setAttribute("color", "pink");
}