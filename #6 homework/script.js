var modal = document.getElementById("myModal");
var btn = document.getElementById("myButton");
var span = document.getElementsByClassName("close")[0];
var background = document.getElementById("modalBackground");

btn.onclick = function() {
  modal.style.display = "block";
  background.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  background.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    background.style.display = "none";
  }
}


function changeBackground() {
const colorInput = document.getElementById("colorInput").value.toLowerCase();
        const body = document.querySelector("body");

        if (colorInput === "red") {
          body.style.backgroundColor = "red";
        } else if (colorInput === "blue") {
          body.style.backgroundColor = "blue";
        } else if (colorInput === "green") {
          body.style.backgroundColor = "green";
        } else if (colorInput === "black") {
          body.style.backgroundColor = "black";
        } else if (colorInput === "white") {
          body.style.backgroundColor = "white";
        } else {
          alert("Invalid color input!");
        }
      }


        function calculateAverage() {
        const numberList = document.getElementById("number-list").value;
        const numbers = numberList.split(":").map(Number);
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        document.getElementById("result").textContent = `The average is ${average.toFixed(2)}`;
      }
      