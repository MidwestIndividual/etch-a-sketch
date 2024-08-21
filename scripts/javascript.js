let mainGrid = document.querySelector(".main-grid");

for (let i =0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","pixel");

    mainGrid.appendChild(newDiv);
}

function changeColor(target){
    target.style.background = "pink";
}

mainGrid.addEventListener("mouseover", (event) => {
    changeColor(event.target);
})

function clearGrid() {
    existingDivs = document.querySelectorAll(".pixel");
    existingDivs.forEach((div) => {
        div.parentNode.removeChild(div);
    })
}

function generateSquares(numberSquares) {
    clearGrid()

    let width = 100 / numberSquares + "%";

    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","pixel");
}