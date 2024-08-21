function changeColor(target){
    target.style.background = "pink";
}

function clearGrid() {
    existingDivs = document.querySelectorAll(".pixel");
    existingDivs.forEach((div) => {
        div.parentNode.removeChild(div);
    })
}

function generateSquares(numberPerSide) {
    let width = 100 / numberPerSide + "%";

    for (let i = 0; i < numberPerSide**2; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class","pixel");
        newDiv.style.flexBasis = width;
    
        mainGrid.appendChild(newDiv);
    }
}

function getColor(previousColor){
    pass;
}

let mainGrid = document.querySelector(".main-grid");

for (let i =0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","pixel");
    newDiv.style.flexBasis = "25%";

    mainGrid.appendChild(newDiv);
}

mainGrid.addEventListener("mouseover", (event) => {
    changeColor(event.target);
})

let button = document.querySelector(".change-button");
button.addEventListener("click", (event) => {
    let numberSides = +prompt("How many squares per side would you like? (Max 100)");

    // Check for invalid input
    if (!(Number.isInteger(numberSides))){
        alert("Invalid input: Number must be an integer. Please try again!")
        return;
    }
    if (!(numberSides > 0 && numberSides < 101)){
        alert("Invalid input: Number must be between 1 and 100. Please try again!")
        return;
    }

    clearGrid();
    generateSquares(numberSides);
});