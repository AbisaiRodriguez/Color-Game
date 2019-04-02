var colors = [
    "rgb(255, 0, 0",
    "rgb(0, 255, 0",
    "rgb(0, 0, 255",
    "rgb(150, 150, 150",
    "rgb(150, 24, 200",
    "rgb(255, 255, 3"
];

var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

