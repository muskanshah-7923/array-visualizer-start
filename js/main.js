// Array Visualizer Start

// Global Variables
let data = [];
for (let n = 1; n <= 10; n++) {
  data.push(randomInt(0, 101));
}
let maxVal = 100; // max data value

// HTML Variables
let outputEl = document.getElementById("container");

// Traverse to Display Data Array
function drawDatArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600;
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  outputEl.innerHTML = outputStr;
}

// Draw Data Array every 200ms
setInterval(drawDatArray, 200);
