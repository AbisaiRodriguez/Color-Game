var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
     //mode buttons event listeners
     for( var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
        //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
            if( clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            }
            else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
     // generate all new colors
     colors = generateRandomColors(numOfSquares);
     // pick a new random color from array
     pickedColor = pickColor();
     // change the color display to the picked color
     colorDisplay.textContent = pickedColor;
     resetBtn.textContent = "New Colors";
     messageDisplay.textContent = "";
     // change colors of squares on array
     for(var i = 0; i < squares.length; i++){
         //add initial colors to squares
         if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

         } else {
            squares[i].style.display = "none";
         }
     }
     h1.style.backgroundColor = "steelblue";
}





function changeColor(color){
//loop through all squares
    for(var i = 0; i < squares.length; i++){
//change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    // repeat num times
    for( var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
    }
     // return the array
    return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return "rgb(" + r + "," + g + "," + b + ")";
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetBtn.addEventListener("click", function(){
    reset();
});