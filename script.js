"use strict"

/*
4 - 
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] = (obj[prop] * 2);
        }   
    }    
}
  
console.log(menu);


3 - 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalary (obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}

console.log(sumSalary(salaries));


2 - 
function isEmpty (obj) {
    let result = true;
    for (let prop in obj) {
        if (prop in obj) {
            result = false;
        }
    }
    return result;
}

let test = {
    'pingas': 3
};
console.log(isEmpty(test) );



let elBurg = document.getElementById("burger-button");
let elMenu = document.getElementById("menu");
let elCarousel = document.getElementById("carousel");
let elButtons = Array.from(document.querySelectorAll(".arrow"));
let elReview = Array.from(document.querySelectorAll(".customer-review"));


elBurg.addEventListener("click", () => elMenu.style.display = elMenu.style.display ? '' : 'block');

elButtons.forEach(element => {
    element.addEventListener("click", moveCarousel);
});

let arrowArray = 0;

function moveCarousel(e) {
    if (e.target.classList.contains('left')) {
        if (arrowArray != 0) {
            arrowArray -= 1;
        }
    } else if (arrowArray < (elReview.length - 1)) {
        arrowArray += 1;
    }
    console.log(arrowArray);
    elReview[arrowArray].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}
console.log(elReview);

*/