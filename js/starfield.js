"use strict";

function getCoordinates(sfWidth, sfHeight) {
    let x = Math.floor(Math.random() * sfWidth);
    let y = Math.floor(Math.random() * sfHeight);
    return [x, y];
}

function getStarField(sfWidth, sfHeight, starcount) {
    let field = " 1px 1px #fff";
    for (let i = 0; i < starcount; i++){
        let [x, y] = getCoordinates(sfWidth, sfHeight);
        field += ", " + x.toString() + "px " + y.toString() + "px #fff";
    }
    return field;
};

document.addEventListener("DOMContentLoaded", function(){
    const sf = document.getElementById("starfield");
    const sf2 = document.getElementById("starfield2");
    const containerDiv = document.getElementById("containerField");
    const contentDiv = document.getElementById("contentField");
    let sfWidth = containerDiv.offsetWidth;
    let sfHeight = contentDiv.offsetHeight;
    sf.style.boxShadow = getStarField(sfWidth, sfHeight / 5, 200);
    sf2.style.boxShadow = getStarField(sfWidth, sfHeight / 3.5, 50);
});