let menu = document.querySelector("#mobile-bars");

let navlist = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("mobile-bars");
    navlist.classList.toggle("open");
};