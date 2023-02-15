"use strict"

const $ = selector => document.querySelector(selector);

const linkThumbnails = (gallery) => {
    //get previous sibling(project-image)
    let mainImage = gallery.previousElementSibling;
    const thumbnails = gallery.querySelectorAll("a");
    //add grown class to first element on content load
    thumbnails[0].firstElementChild.classList.add("grown");
    //process thumbnails
    for(let i = 0; i < thumbnails.length; i++){
        //preload image
        const image = new Image();
        image.src = thumbnails[i].href;
        //event handler for thumbnails
        thumbnails[i].addEventListener("click", evt =>{
            mainImage.src = thumbnails[i].href;
            //TODO add alt
            mainImage.alt = "";
            //add 'grown' class to first child of 'a' which is the 'img'
            thumbnails[i].firstElementChild.classList.add("grown");
            //prevent default behavior: opening img in new window/tab
            evt.preventDefault();
            //remove grow class from all 'img' elements except the one clicked on
            for(let j = 0; j < thumbnails.length; j++){
                if(j != i){
                    thumbnails[j].firstElementChild.classList.remove("grown");
                }
            }
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