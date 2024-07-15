"use strict"

let elBurg = document.getElementById("burger-button");
let elMenu = document.getElementById("menu");
let elCarousel = document.getElementById("carousel");
let elButtons = Array.from(document.querySelectorAll(".arrow"));
let elReview = Array.from(document.querySelectorAll(".customer-review"));


elBurg.addEventListener("click", () => elMenu.style.display = elMenu.style.display ? '' : 'block');

elButtons.forEach(element => {
    element.addEventListener("click", moveCarousel);
});

let arrowCounter = 0;

function moveCarousel(e) {
    if (e.target.classList.contains('left')) {
        if (arrowCounter != 0) {
            arrowCounter -= 1;
        }
    } else if (arrowCounter < (elReview.length - 1)) {
        arrowCounter += 1;
    }
    elReview[arrowCounter].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}