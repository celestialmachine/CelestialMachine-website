"use strict"

const $ = selector => document.querySelector(selector);

const linkThumbnails = (gallery) => {
    //get previous sibling(project-image)
    let mainImage = gallery.previousElementSibling;
    const thumbnails = gallery.querySelectorAll("a");
    //process thumbnails
    for(let thumbnail of thumbnails) {
        //preload image
        const image = new Image();
        image.src = thumbnail.href;
        //event handler for thumbnail
        thumbnail.addEventListener("click", evt =>{
            mainImage.src = thumbnail.href;
            //TODO add alt
            mainImage.alt = "";
            evt.preventDefault();
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //get all galleries in the page
    let galleries = document.querySelectorAll(".project-gallery");

    //process all links per gallery
    for (let gallery of galleries) {
        linkThumbnails(gallery);
    }    
});