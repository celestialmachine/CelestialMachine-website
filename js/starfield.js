"use strict";

function getCoordinates(sfWidth, sfHeight) {
    let x = Math.floor(Math.random() * sfWidth);
    let y = Math.floor(Math.random() * sfHeight);
    return [x, y];
}

function getStarField(sfWidth, sfHeight, starCount) {
    let field = " 1px 1px #fff";
    for (let i = 0; i < starCount; i++){
        let [x, y] = getCoordinates(sfWidth, sfHeight);
        field += ", " + x.toString() + "px " + y.toString() + "px #fff";
    }
    return field;
};

document.addEventListener("DOMContentLoaded", function(){
    const sf1 = document.getElementById("starfield1");
    const sf2 = document.getElementById("starfield2");
    const sf3 = document.getElementById("starfield3");
    const contentDiv = document.getElementById("contentField");
    let sfWidth = screen.width;
    let sfHeight = contentDiv.offsetHeight;
    sf1.style.boxShadow = getStarField(sfWidth, sfHeight / 5, 200);
    sf2.style.boxShadow = getStarField(sfWidth, sfHeight / 3.5, 80);
    sf3.style.boxShadow = getStarField(sfWidth, sfHeight, 30)
});