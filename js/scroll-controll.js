//Throttle control to fix scroll issues in firefox
"use strict";

//function expression used as callback
const checkThrottle = throttle(evt => {})

// add scroll event to all elements with 'card' class
var cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener("scroll", evt => {
        //pass event to checkThrottle for callback & store
        //shouldWait parameter to prevent default if true
        let holdScroll = checkThrottle(evt)
        if(holdScroll) evt.preventDefault()
    });
}

//throttle function
function throttle(cb, delay =  200, evt) {
    let shouldWait = false
    return (...args) => {
        //once should wait is true, will return it to pause scroll overlap
        if(shouldWait) return shouldWait
        
        cb(...args)
        shouldWait = true

        //sets shouldWait back to false after delay
        setTimeout (() =>{
            shouldWait = false
        }, delay)
    }
}