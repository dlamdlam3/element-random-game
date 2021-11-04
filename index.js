
var randomNumber1 = Math.floor(Math.random() * 5) + 1;

var randomElementImage = "element" + randomNumber1 + ".jpg"; 

var randomImageSource = "images/" + randomElementImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 5) + 1;

var randomImageSource2 = "images/element" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

console.log(randomImageSource, randomImageSource2, randomNumber1);

if (randomNumber1 === 1 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "X Play 1 Wins!";
  }
  else if (randomNumber1 === 1 && randomNumber2 === 5) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! X";
  }
  else if (randomNumber1 === 2 && randomNumber2 === 4) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! Z";
  }
  else if (randomNumber1 === 2 && randomNumber2 === 1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! Y";
  }
  else if (randomNumber1 === 3 && randomNumber2 === 5) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! ZZ";
  }
  else if (randomNumber1 === 3 && randomNumber2 === 4) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! XX";
  }
  else if (randomNumber1 === 4 && randomNumber2 === 3) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! YY";
  }
  else if (randomNumber1 === 4 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! XA";
  }
  else if (randomNumber1 === 5 && randomNumber2 === 1) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! DA";
  }
  else if (randomNumber1 === 5 && randomNumber2 === 3) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! AA";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }