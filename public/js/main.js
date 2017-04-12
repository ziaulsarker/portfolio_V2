"use strict";

let pages = document.getElementsByClassName("page");

let navIcon = document.querySelector(".nav-hamburger");

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("hamburger-slider");
    document.querySelector(".bar-1").classList.toggle("navbar-left");
    document.querySelector(".bar-2").classList.toggle("hide");
    document.querySelector(".bar-3").classList.toggle("navbar-right");
    document.querySelector(".SiteHeader").classList.toggle("nav-visible");
    document.querySelector(".pages-container").classList.toggle("nav-width");
});




function showPage(element){
    // get id for all pages and convert to only show the string with out the hash
    let pageHash = element.hash.split("#").splice(-1, 1).join(); 

    // loop through all pages and if the hash for the anchor matches translate the page from left to right with css class
    for(let i = 0; i < pages.length; i++){ 
        if(pageHash === pages[i].id ){

            pages[i].classList.add("show");
        } else{
            pages[i].classList.remove("show") ;
        }
    }
} //end function









  