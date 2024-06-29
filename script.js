let elBurg = document.getElementById("burger-button");
let elMenu = document.getElementById("menu");

elBurg.addEventListener("click", () => elMenu.style.display = elMenu.style.display ? '' : 'block');