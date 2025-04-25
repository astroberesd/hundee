let bodCol = document.getElementById('container');
let headCol = document.getElementById('header');
let boolDark = false;
let themeIcon = document.getElementById("themeCol");
let txtDark = document.getElementById("heardertxt");
let toggleContainer = document.getElementById('toggleContainer');
let cancle = document.getElementById("cancle");
let s = document.getElementById('active');
let themeCol = document.getElementById('themeCol');
let menuI = document.getElementById('menuI');
let body = document.getElementById('body');

function darkMode() {
    if (boolDark == false) {
        boolDark = true;
        bodCol.style.background = "#60804de7";
        themeIcon.src = "images/light.svg";
        txtDark.style.color = "#fff";
        s.setAttribute('style', 'background-image: url("images/nightSky.png")');
        s.style.backgroundSize = "100%, 100%";
        s.style.backgroundRepeat = "no-repeat";
        menuI.src = 'images/menuF.svg';
        themeCol.src = 'images/lightF.svg';
        body.setAttribute('style', 'background-image: url("images/nightSky.png")');
        headCol.setAttribute('style', 'background-image: url("images/nightSky.png")');
    } else {
        boolDark = false;
        bodCol.style.background = "#c1fc9fda";
        themeIcon.src = "images/dark.svg";
        txtDark.style.color = "#000";
        menuI.src = 'images/menu.svg';
        themeCol.src = 'images/dark.svg';
        s.setAttribute('style', 'background-image: url("images/sky.png")');
        headCol.setAttribute('style', 'background-image: url("images/Sky.png")');
        body.setAttribute('style', 'background-image: url("images/Sky.png")');
    }
}

function hotdog() {
    toggleContainer.setAttribute("style", "left: 0vw !important;");
    setTimeout(function () {
        cancle.setAttribute("style", "background-color: rgba(17, 17, 17, .5);")
    }, 650);
}

function backTgl() {
    toggleContainer.setAttribute("style", "left: -100vw !important;");
    cancle.setAttribute("style", "background-color: transparent;");

}

function about () {
    window.location = 'aboutUs.html';
}

function service () {
    window.location = 'services.html';
}

function home () {
    window.location = 'index.html';
}

function contact () {
    window.location = 'contact.html';
}