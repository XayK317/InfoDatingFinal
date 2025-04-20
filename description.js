
// Description.js
document.getElementById("pants").style.color = "blue";

function changeText(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.color = color;
    }
}

changeText("pants", "blue" );


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

changeBackgroundColor("#C49C75"); // Camel color

function changeTextColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.color = color;
    }
}

document.getElementById("hat").style.color = "purple";

function makeShirtComicSans(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
    }
}

// Apply Comic Sans font to the shirt
makeShirtComicSans("shirt");
