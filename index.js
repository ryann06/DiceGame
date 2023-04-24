var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // tap to class attribute and add the random number
var randomImageSource = "images/" + randomDiceImage; // tap folder image and add the randomDiceImage
var image1 = document.querySelectorAll("img")[0]; // tap to img element; array to tap for first img attribute

image1.setAttribute("src", randomImageSource); // tap to src attribute; add the randomimgsrc to randomize the output



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// tap to class element and tap the attributes and add the randomizeNumber
// randomizeNumber can be used on condition statement to declare who wins
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw! 🟰";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Play 2 Wins!🚩";
}

