var random_number_1 = Math.floor(Math.random() * 6) + 1;
var random_dice_image_1 = "./images/dice" + random_number_1 + ".png";
var player1image = document.querySelector(".img1");
player1image.setAttribute("src", random_dice_image_1);


var random_number_2 = Math.floor(Math.random() * 6) + 1;
var random_dice_image_2 = "./images/dice" + random_number_2 + ".png";
var player2image = document.querySelector(".img2");
player2image.setAttribute("src", random_dice_image_2);

var title_to_change = document.querySelector("h1");
if (random_number_1 > random_number_2) {
    title_to_change.textContent = "Player 1 wins!";
}
else if (random_number_1 === random_number_2) {
    title_to_change.textContent = "It's a tie!";
}
else {
    title_to_change.textContent = "Player 2 wins!";
}