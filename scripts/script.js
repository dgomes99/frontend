// JavaScript Document
console.log("hi");

var hamburger = document.querySelector("header ul li:first-of-type div");
var menuham = document.querySelector("header div:nth-child(2)");
var submenu = document.querySelector("header div ul li:first-child");

function openMenu () {
    menuham.classList.toggle ("open");
}

hamburger.addEventListener("click", openMenu);

function kruisjeMenu () {
    hamburger.classList.toggle ("kruisje");
}

hamburger.addEventListener("click", kruisjeMenu);

function klapSub () {
    submenu.classList.toggle("klap");
}

submenu.addEventListener("click", klapSub);

