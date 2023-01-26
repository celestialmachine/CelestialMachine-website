"use strict";

function getCoordinates(sfWidth, sfHeight) {
    let x = Math.floor(Math.random() * sfWidth);
    let y = Math.floor(Math.random() * sfHeight);
    return [x, y];
}

function getStarField(sfWidth, sfHeight) {
    let field = " 1px 1px #fff";
    for (let i = 0; i < 200; i++){
        let [x, y] = getCoordinates(sfWidth, sfHeight);
        field += ", " + x.toString() + "px " + y.toString() + "px #fff";
    }
    return field;
};

document.addEventListener("DOMContentLoaded", function(){
    const sf = document.getElementById("starfield");
    const container = document.getElementById("contentField");
    let sfWidth = container.offsetWidth;
    let sfHeight = container.offsetHeight;
    sf.style.boxShadow = getStarField(sfWidth, sfHeight);
});