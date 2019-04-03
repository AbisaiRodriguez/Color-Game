var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
        if( clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetBtn.textContent = "Play Again";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        }
        else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
        }
    });
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
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change the color display to the picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares on array
    for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "#232323";
    messageDisplay.textContent = "";
});