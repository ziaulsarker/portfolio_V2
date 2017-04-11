"use strict";

let pages = document.getElementsByClassName("page");

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









  