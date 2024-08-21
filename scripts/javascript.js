console.log('Hello World');

let mainGrid = document.querySelector(".main-grid");

for (let i =0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","pixel");

    mainGrid.appendChild(newDiv);
}